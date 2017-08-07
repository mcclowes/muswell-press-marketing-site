import R from "ramda";

export const objMap = (obj, cb) => Object.keys(obj).reduce((acc, key) => ({
	...acc,
	[key]: cb(key, obj[key]),
}), {});

export const printObj = (obj) => JSON.stringify(obj, null, "  ");

export const sentenceCase = str => str.slice(0, 1).toUpperCase() + str.slice(1);

export const bindMethods = (that, methods) => { 
	methods.forEach(name => {
		that[name] = that[name].bind(that);
	})
};

export const path = pathStr => R.path(pathStr.split(".").map(key => {
	const num = parseInt(key, 10);
	return isNaN(num) ? key : num;
}));