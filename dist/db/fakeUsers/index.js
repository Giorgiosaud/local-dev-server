"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.quantity = void 0;

var _helpers = require("../../helpers");

var quantity = 100;
exports.quantity = quantity;

var fakeUser = function fakeUser() {
  var name = _helpers.faker.name.findName();

  var email = _helpers.faker.internet.email(); // Rusty@arne.info


  return {
    name: name,
    email: email
  };
};

var _default = (0, _helpers.arrayGenerator)(quantity, fakeUser);

exports["default"] = _default;