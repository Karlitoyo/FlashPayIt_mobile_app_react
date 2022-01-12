const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "August1987!",
  host: "localhost",
  port: 5432,
  database: "flashpayusers",
});

module.exports = pool;
