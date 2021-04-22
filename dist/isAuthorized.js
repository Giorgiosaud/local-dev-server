"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(res) {
  console.log(res.headers);
  return res.headers.authorization && res.headers.authorization.includes('Bearer');
};

exports["default"] = _default;