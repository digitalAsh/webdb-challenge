const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

const projectRouter = require('./projects/projectRouter')
const actionRouter = require('./actions/actionRouter')



//built in middleware
server.use(express.json());

//third party middleware
server.use(helmet());
server.use(logger('dev'));

//custom middleware
server.use(typeLogger)

//routers
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Test Get</h2>`)
});


function typeLogger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
};

module.exports = server;
