# is-object 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/is-object?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/is-object)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/is-object)](https://www.npmjs.com/package/@ivanhanak_com/is-object)

A simple javascript utility checking if a variable is an object. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/is-object
```

Using yarn:

```sh
yarn add @ivanhanak_com/is-object
```

## Import
```javascript
import isObject from '@ivanhanak_com/is-object';
```

## Usage
   

```javascript
isObject({}); // => true
isObject({name: "Ivan"}); // => true
isObject([]); // => false
isObject(null); // => false
isObject(false); // => false
isObject(true); // => false
isObject(undefined); // => false
isObject("string"); // => false
isObject(1); // => false
isObject(Date); // => false
isObject(isNan); // => false
isObject(isNan()); // => false
isObject(Infinity); // => false
isObject(function () {}); // => false
```

## Browser support
IE10+, Chrome, Safari, Firefox