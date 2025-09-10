import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dummy_users',
  waitForConnections: true,
  connectionLimit: 10
});


// Add this to test DB connection and log result
pool.getConnection()
  .then(conn => {
    console.log('Database connection successful!');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
  });

export default pool;