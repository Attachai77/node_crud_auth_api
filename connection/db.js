var knex = require('knex')({
    client: 'pg',
    // version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '1234',
      database : 'node_express_api'
    }
});

module.exports = knex