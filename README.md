# Memcached Promise
A fully featured Memcached client 'memcached' with Promise support. Powered by Bluebird.

## Installation
```sh
$ npm install --save memcached
$ npm install --save memcached-promise
```
Same as request-promise, `memcached` is defined as a peer-dependency and thus has to be installed separately.

## Example

```js
const Memcached = require("memcached-promise");

const memcached = new Memcached(
	"localhost:11211",
	{ 
		maxExpiration: 2592000, 
		namespace: "test", 
		debug: false 
	}
);

void async function main() {
	try {
		await memcached.set("hello", { foo: "bar"});
		console.log(await memcached.get("hello"));
	} catch (error) {
		console.error(error);
	}
}()
```

## ToDo List
A clear declaration file for this module.

## License
This software is released under the MIT license. See the [license file](LICENSE) for more details.
