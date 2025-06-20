import express from 'express';
import pool from './dbConnection.js';

const app = express();
app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM new_users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

console.log('✅ app.js loaded and executed');

export default app;
