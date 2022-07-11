// Load module
const mysql = require('mysql2');
// Initialize pool
const env = process.env;
const pool = mysql.createPool({
  host: env.MYSQL_HOST_IP,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
});
// Export pool
module.exports = pool.promise();
