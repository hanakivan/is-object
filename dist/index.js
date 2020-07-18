"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//thanks to this stack overflow answer:
//https://stackoverflow.com/a/46663081/2880184
var _default = function _default(variable) {
  return variable instanceof Object && variable.constructor === Object;
};

exports.default = _default;