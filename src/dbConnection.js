import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dummy_users',
  waitForConnections: true,
  connectionLimit: 10
});

export default pool;