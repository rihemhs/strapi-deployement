const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ys38280-001.eu.clouddb.ovh.net'),
      port: env.int('DATABASE_PORT', 35263),
      database: env('DATABASE_NAME', 'tipcs'),
      user: env('DATABASE_USERNAME', 'Tipcs_TNPCS'),
      password: env('DATABASE_PASSWORD', 'Rihem2019'),
      
    },
    debug: false,
  },
});
