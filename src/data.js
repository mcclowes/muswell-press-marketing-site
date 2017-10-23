import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";

const slugify = x => (
	_slugify(x, {
		lower: true,
	})
);

const makeMapUsingSlugs = list =>
	list.reduce(
		(acc, item) => ({
			...acc,
			[item.slug]: item,
		}),
		{},
	);

// --------------------------------------------------

// transform a field or do something to an existing field to add a new one
const adjustFields = (a, b, fn) => fieldsObj => ({
	...fieldsObj,
	...(
		fieldsObj[a]
		? { [b]: fn(fieldsObj[a]), }
		: {}
	),
});

const shapeImageField = o => {
	if (o.fields) {
		const {
			fields: {
				file: {
					url,
					details: {
						size,
						image: {
							width,
							height,
						},
					},
					fileName,
					contentType,
				},
			},
		} = o;

		return {
			contentType,
			fileName,
			height,
			size,
			url,
			width,
		};
	}
	else {
		return o;
	}
};

const defaultFieldShaping = R.pipe(
	adjustFields("image", "image", shapeImageField),
	adjustFields("picture", "picture", shapeImageField),
	adjustFields("cover", "cover", shapeImageField),
	adjustFields("title", "slug", slugify),
	adjustFields("content", "html", marked),
	adjustFields("text", "text", marked),
	adjustFields("advisoryBoard", "advisoryBoard", marked),
);

let siteData = {};

const constructBase = (target, dest) => {
	if ( typeof target === "object" || typeof target === "array" ) {
		R.pipe(
			R.map(item => {
				let shapedItem = null;

				if (item && item.sys) {
					const itemType = item.sys.contentType ? item.sys.contentType.sys.id : item.sys.type;

					shapedItem = {
						...defaultFieldShaping(item.fields),
						createdAt: item.sys.createdAt,
					};

					dest[itemType] = (
						dest[itemType]
						? dest[itemType].concat(shapedItem)
						: [ shapedItem, ]
					);
				} else {
					shapedItem = item;
				}
			})
		)(target);
	}
};

const shapeObjectNicely = (target) => {
	let shapedTarget = target;

	if ( typeof target === "object" || typeof target === "array" ) {
		return R.map(item => {
			if (item && item.fields) { 
				item.fields = {
					...defaultFieldShaping(item.fields),
					createdAt: item.sys.createdAt,
				};

				item = item.fields;
			}

			return shapeObjectNicely(item);
		})(shapedTarget);
	}

	return shapedTarget;
};

constructBase(rawdata.items, siteData);
siteData = shapeObjectNicely(siteData);
// Flatten objects containing single objects
siteData = R.map(x => x.length === 1 ? x[0] : x)(siteData);

console.log(siteData);

export default siteData;