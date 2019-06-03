module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projectTracker.sqlite3'
    },
    useNullAsDefault: true,
    debug: true
  },
  migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    }
};

