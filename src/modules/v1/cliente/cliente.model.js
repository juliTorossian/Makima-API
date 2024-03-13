import { pool } from '../../../db.js';

/**
 * Busca todos los Clientes
 */
export const getClientes = async () => {
    try{
        // const query = "SELECT * FROM cliente WHERE clienteActivo = true";
        const query = "SELECT * FROM cliente";
        let params = []
        const [rows] = await pool.query(query, params);

        let response = [];
        rows.map( (row) => {
            response.push(format(row));
        });

        return response;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Busca un cliente
 * @param {string} clienteId - id del cliente a buscar
 */
export const getCliente = async (clienteId) => {
    try{
        const query = "SELECT * FROM cliente WHERE clienteId = ?";
        let params = [clienteId]
        const [rows] = await pool.query(query, params);

        return format(rows[0]);
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 * Crea un nuevo cliente
 * @param {Object} cliente - Entidad cliente
*/
export const insertCliente = async (cliente) => {
    try{
        const query = "INSERT cliente(clienteId, clienteSigla, clienteNombre, clienteActivo) VALUE ((SELECT getNewId()), ?, ?, true)";
        let params = [
            cliente.sigla,
            cliente.nombre
        ];
        const [rows] = await pool.query(query, params);

        return cliente;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 * Modifica un cliente
 * @param {Object} cliente - Entidad cliente
*/
export const updateCliente = async (cliente) => {
    try{
        const query = "UPDATE cliente SET clienteSigla = ?, clienteNombre = ? WHERE clienteId = ?";
        let params = [
            cliente.sigla,
            cliente.nombre,
            cliente.id
        ];
        const [rows] = await pool.query(query, params);

        return cliente;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 * Eliminar un cliente
 * @param {string} clienteId - id del cliente a eliminar
*/
export const deleteCliente = async (clienteId) => {
    try{
        const query = "CALL delete_cliente(?)";
        let params = [
            clienteId
        ];
        const [rows] = await pool.query(query, params);

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 * Reactiva un cliente
 * @param {string} clienteId - id del cliente a reactivar
*/
export const reactivarCliente = async (clienteId) => {
    try{
        const query = "UPDATE cliente SET clienteActivo = true WHERE clienteId = ? AND clienteActivo = false";
        let params = [
            clienteId
        ];
        const [rows] = await pool.query(query, params);

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} cliente - Entidad cliente
 * @returns Objeto cliente formateado
 */
function format(cliente){
    return {
        id: cliente.clienteId,
        sigla: cliente.clienteSigla,
        nombre: cliente.clienteNombre,
        activo: cliente.clienteActivo
    }
}