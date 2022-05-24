

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '103.82.21.146'),
      port: env.int('DATABASE_PORT', 5434),
      database: env('DATABASE_NAME', 'serverquangba'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '123456789'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
