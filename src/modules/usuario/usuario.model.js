import { pool } from '../../db.js';

export const existeUsuario = async (usuario, password) => {

    
    let query = 'SELECT usuarioRol FROM usuario WHERE usuarioUsuario = ? AND usuarioPass = ?';
    let params = [usuario, password];

    const [rows] = await pool.query(query, params);

    // console.log(rows[0]);
    return rows[0];

}