"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.quantity = void 0;

var _helpers = require("../../helpers");

var quantity = 30;
exports.quantity = quantity;

var fakePost = function fakePost() {
  var slug = _helpers.faker.lorem.slug();

  var title = _helpers.faker.lorem.sentence();

  var content = "<p>".concat(_helpers.faker.lorem.paragraphs(5, '</p><p>'), "</p>");
  var author = "".concat(_helpers.faker.name.firstName(), " ").concat(_helpers.faker.name.lastName());
  return {
    title: title,
    content: content,
    author: author,
    slug: slug
  };
};

var _default = (0, _helpers.arrayGenerator)(quantity, fakePost);

exports["default"] = _default;