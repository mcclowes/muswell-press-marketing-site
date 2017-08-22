const jsonfile = require("jsonfile");
const shapeData = require("./shapeContentful").default;

const rawFile = "./contentful-raw-data.json";
const shapedFile = "./contentful-shaped-data.json";

const write = (data) => {

	jsonfile.writeFile(rawFile, data, { spaces: 2, }, function (err, obj) {
		if (err) { console.log("Error writing raw data: ", err) }
		else { console.log(`raw data written to ${rawFile}`) }
	});

	jsonfile.writeFile(shapedFile, shapeData(data), { spaces: 2, }, function (err, obj) {
		if (err) { console.log("Error writing shaped data: ", err) }
		else { console.log(`shaped data written to ${shapedFile}`) }
	});

};

require("./contentful").default({ cb: write, });