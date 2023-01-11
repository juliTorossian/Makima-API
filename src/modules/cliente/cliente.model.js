import { pool } from '../../db.js';


/** 
 ** Busca todos los clientes en la base de datos
 *
 *! @param page: nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
*/
export const getClientes = async () => {

    try{

        const query = "SELECT * FROM cliente";
        let params = []

        const [rows] = await pool.query(query, params);

        console.log(rows);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

export const getCliente = async (clienteId) => {

    try{

        const query = "SELECT * FROM cliente WHERE clienteId = ?";
        let params = [clienteId]

        const [rows] = await pool.query(query, params);

        console.log(rows[0]);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}