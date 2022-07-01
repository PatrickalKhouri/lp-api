const { Pool } = require('pg');

const pool = new Pool({
  user: 'patrickalkhouri',
  host: 'localhost',
  database: 'lp',
  password: 'password',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
