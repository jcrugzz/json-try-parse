# json-try-parse

Try to parse json, or return undefined. I just wrote this too many times so it
had to become a module

## Install

```sh
npm install json-try-parse --save
```

## Example

```js
var tryParse = require('json-try-parse');

var obj = tryParse('{ "hello": "there" }');

console.log(obj.hello);
// "there"
```
