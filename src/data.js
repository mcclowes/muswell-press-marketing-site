import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";

const slugify = x => _slugify(x, {
	lower: true,
});

const makeMapUsingSlugs = list => list.reduce((acc, item) => ({
	...acc,
	[item.slug]: item,
}), {})

const booksList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "book")
	.map(item => ({
		...item.fields,
		cover: (
			item.fields.cover
			? item.fields.cover.fields.file
			: {}
		),
		slug: slugify(item.fields.title),
		colors: item.fields.colors ? item.fields.colors.fields : {},
	}))
);

const booksMap = makeMapUsingSlugs(booksList);

const homePage = (
	item => ({
		...item.fields,
		booksBooks: (
			(item.fields.booksBooks || [])
			.map(o => booksMap[slugify(o.fields.title)])
		),
	})
)(
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "homePage")
	[0]	
);

const aboutPage = (
	item => ({
		...item.fields,
		picture: (
			item.fields.picture
			? item.fields.picture.fields.file
			: {}
		),
	})
)(
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "aboutPage")
	[0]	
);

const siteSettings = (
	item => ({
		...item.fields,
		defaultColors: item.fields.defaultColors.fields,
	})
)(
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "generalSettings")
	[0]	
);

export {
	booksList,
	booksMap,
	homePage,
	aboutPage,
	siteSettings,
	rawdata,
};