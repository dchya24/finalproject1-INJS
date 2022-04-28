const Pool = require('pg').Pool;

const db = new Pool({
  user: process.env.DB_USERNAME || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'finalproject1_injs',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || '5432'
});

module.exports = db;
