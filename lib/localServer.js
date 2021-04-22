import jsonServer from 'json-server';
import chalk from 'chalk';
import db from './db';

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
// import isAuthorized from './isAuthorized'

const server = jsonServer.create();
const router = jsonServer.router(db);
const middleware = jsonServer.defaults();

server.use(middleware);
// server.use((req, res, next) => {
//   if (isAuthorized(req)) { // add your authorization logic here
//     next() // continue to JSON Server router
//   } else {
//     res.sendStatus(401)
//   }
//  })

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));
// In this example, returned resources will be wrapped in a body property
/*
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}
*/
server.use(router);
server.listen(3001, () => {
  logger.info(chalk.blue('JSon server is running at http://localhost:3001'));
});
