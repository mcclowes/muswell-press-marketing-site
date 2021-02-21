// const objMap = require("../../src/lib/util.oldsyntax").objMap;

// exports.default = (rawData) => {
// 	const r = {};

// 	r.galleryImages = (
// 		rawData.items
// 		.filter(item => item.sys.contentType.sys.id === "gallery-image")
// 		.map(item => objMap(item.fields, (fieldName, val) => (
// 			fieldName === "image"
// 			? (
// 				val && val.fields && val.fields.file
// 				? Object.assign(
// 					{},
// 					val.fields.file,
// 					val.fields.file.details.image
// 				)
// 				: val
// 			)
// 			: val
// 		)))
// 	);

// 	r.galleryTags = {};
// 	r.galleryImages.forEach(entry => {
// 		entry.tags.forEach(tag => {
// 			r.galleryTags[tag] = (
// 				r.galleryTags[tag]
// 				? r.galleryTags[tag].concat(entry)
// 				: [ entry, ]
// 			)
// 		})
// 	});

// 	r.galleryTagsList = Object.keys(r.galleryTags);

// 	r.testModels = (
// 		rawData.items
// 		.filter(item => item.sys.contentType.sys.id === "test")
// 		.map(item => item.fields)
// 	);

// 	r.pages = {};

// 	r.pages.classes = objMap(
// 		(
// 			rawData.items
// 			.filter(item => item.sys.contentType.sys.id === "pageClasses")
// 			[0].fields
// 		),
// 		(fieldName, val) => (
// 			fieldName.includes("testimonial")
// 			? val.fields
// 			: val
// 		)
// 	);

// 	r.testimonials = (
// 		rawData.items
// 		.filter(item => item.sys.contentType.sys.id === "testimonial")
// 		.map(item => item.fields)
// 	);

// 	r.allData = rawData;

// 	return r;
// };

exports.default = (x) => x;
