import mysql from 'mysql2/promise';

// Crea una conexión con la base de datos MySQL
const pool = mysql.createPool({
  host: '54.37.41.192',
  user: 'artistApp',
  password: 'artistApp',
  database: 'artistsdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query(sql, values = []) {
  const [results] = await pool.execute(sql, values);
  return results;
}
