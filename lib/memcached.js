"use strict";
const Bluebird = require("bluebird");
const Memcached = require("memcached");

Memcached.config.defaultLifetime = 60;

const promisifiedKeys = [
	"touch",
	"get",
	"gets",
	"getMulti",
	"set",
	"replace",
	"add",
	"cas",
	"append",
	"prepend",
	"incr",
	"decr",
	"del",
	"version",
	"flush",
	"stats",
	"settings",
	"slabs",
	"items",
	"cachedump",
	"connect",
];

promisifiedKeys.forEach(func => {
	const _func = Memcached.prototype[func];
	Memcached.prototype[func] = function () {
		const _arguments = Array.from(arguments);
		if (func === "set" && _arguments.length === 2)
			_arguments.push(this.defaultLifetime);
		return new Bluebird((resolve, reject) => {
			_func.apply(this, [
				..._arguments,
				(error, response) =>
					error ? reject(error) : resolve(response)
			]);
		});
	};
});

module.exports = Memcached;
