module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./games.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./main/migrations"
    },
    seeds: {
      directory: "./main/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./games.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./test/migrations"
    },
    seeds: {
      directory: "./test/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
