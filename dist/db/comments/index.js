"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.quantity = void 0;

var _helpers = require("../../helpers");

var _posts = require("../posts");

var quantity = 300;
exports.quantity = quantity;

var fakePost = function fakePost() {
  var body = "<p>".concat(_helpers.faker.lorem.paragraphs(5, '</p><p>'), "</p>");

  var postId = _helpers.faker.datatype.number({
    min: 0,
    max: _posts.quantity
  });

  return {
    body: body,
    post_id: postId
  };
};

var _default = (0, _helpers.arrayGenerator)(quantity, fakePost);

exports["default"] = _default;