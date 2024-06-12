import { pool } from "../db.js"; //conexion a bases de datos

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}