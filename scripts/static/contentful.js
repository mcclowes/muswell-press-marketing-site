require("dotenv").config() // lets me use process.env
const contentful = require("contentful");
const shapeData = require("./shapeContentful").default;

// --------------------------------------------------

exports.default = (opts = {}) => (
	contentful.createClient({
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
		space: process.env.CONTENTFUL_SPACE_ID || "",
	})
	.getEntries({
		limit: 500,
	})
	.then(res => {
		if (opts.log) {
			console.log(JSON.stringify(res, null, "  "));
		}
		if (opts.cb) {
			opts.cb(res);
		}
		return shapeData(res);
	})
);