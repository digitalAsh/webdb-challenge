const knex = require('knex');
const knexConfig = require('../knexfile.js').development;

// const knexConfig = {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/projectTracker.sqlite3'
//     },
//     useNullAsDefault: true,
//     debug: true
//   };

module.exports = knex(knexConfig);