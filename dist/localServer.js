"use strict";

var _jsonServer = _interopRequireDefault(require("json-server"));

var _chalk = _interopRequireDefault(require("chalk"));

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var winston = require('winston');

var logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'user-service'
  },
  transports: [//
  // - Write all logs with level `error` and below to `error.log`
  // - Write all logs with level `info` and below to `combined.log`
  //
  new winston.transports.File({
    filename: 'error.log',
    level: 'error'
  }), new winston.transports.File({
    filename: 'combined.log'
  })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
} // import isAuthorized from './isAuthorized'


var server = _jsonServer["default"].create();

var router = _jsonServer["default"].router(_db["default"]);

var middleware = _jsonServer["default"].defaults();

server.use(middleware); // server.use((req, res, next) => {
//   if (isAuthorized(req)) { // add your authorization logic here
//     next() // continue to JSON Server router
//   } else {
//     res.sendStatus(401)
//   }
//  })

server.use(_jsonServer["default"].rewriter({
  '/api/*': '/$1'
})); // In this example, returned resources will be wrapped in a body property

/*
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}
*/

server.use(router);
server.listen(3001, function () {
  logger.info(_chalk["default"].blue('JSon server is running at http://localhost:3001'));
});