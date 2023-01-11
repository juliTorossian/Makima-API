import { pool } from '../../db.js';


/** 
 ** Busca todos los productos en la base de datos
 *
*/
export const getProductos = async () => {

    try{

        const query = "SELECT * FROM producto";
        let params = []

        const [rows] = await pool.query(query, params);

        console.log(rows);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

export const getProducto = async (productoId) => {

    try{

        const query = "SELECT * FROM producto WHERE productoId = ?";
        let params = [productoId]

        const [rows] = await pool.query(query, params);

        console.log(rows[0]);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}