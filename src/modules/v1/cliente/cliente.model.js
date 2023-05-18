// TOOK VER TODOS LOS CLIENTE
// TOOK VER UN CLIENTE
// TOOK CREAR UN CLIENTE
// TOOK MODIFICAR CLIENTE
// TOOK ELIMINAR CLIENTE - SOFT-DELETE
// TOOK REACTIVAR CLIENTE


import { pool } from '../../../db.js';

/** 
 ** Busca todos los clientes en la base de datos
 *
*/
export const getClientes = async () => {

    try{

        // const query = "SELECT * FROM cliente WHERE clienteActivo = true";
        const query = "SELECT * FROM cliente";
        let params = []

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        let response = [];

        rows.map( (row) => {
            response.push({
                "id": row.clienteId,
                "sigla": row.clienteSigla,
                "nombre": row.clienteNombre,
                "activo": row.clienteActivo
            });
        });
        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca todos los clientes en la base de datos
 *
 *i @param clienteId: id del cliente a consultar
*/
export const getCliente = async (clienteId) => {

    try{

        // const query = "SELECT * FROM cliente WHERE clienteId = ? AND clienteActivo = true";
        const query = "SELECT * FROM cliente WHERE clienteId = ?";
        let params = [clienteId]

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);

        let response = '';

        response = {
            "id": rows[0].clienteId,
            "sigla": rows[0].clienteSigla,
            "nombre": rows[0].clienteNombre,
            "activo": rows[0].clienteActivo
        }
        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo cliente
 *
 *i @param cliente: objeto con los datos necesarios del cliente - especificado mas abajo
*/
export const insertCliente = async (cliente) => {

    /** 
    * i Objeto que tiene que llegar por parametro (nTipoEvento)
    {
        "sigla": "CUS",                 //* sigla del cliente
        "nombre": "CUSTOM",             //* nombre del cliente
    }
    **/

    try{

        const query = "INSERT cliente(clienteId, clienteSigla, clienteNombre, clienteActivo) VALUE ((SELECT getNewId()), ?, ?, true)";
        let params = [
            cliente.sigla,
            cliente.nombre
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Modifica un cliente
 *
 *i @param cliente: objeto con los datos modificados del cliente - especificado mas abajo
*/
export const updateCliente = async (cliente) => {

    /** 
    * i Objeto que tiene que llegar por parametro (nTipoEvento)
    {
        "id": 2                         //* id del cliente
        "sigla": "CUS",                 //* sigla del cliente
        "nombre": "CUSTOM",             //* nombre del cliente
    }
    **/

    try{

        const query = "UPDATE cliente SET clienteSigla = ?, clienteNombre = ? WHERE clienteId = ?";
        let params = [
            cliente.sigla,
            cliente.nombre,
            cliente.id
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Eliminar un cliente
 *
 *i @param clienteId: id del cliente a eliminar
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
        console.error(err);
        return null;
    }
}

/** 
 ** Reactiva un cliente
 *
 *i @param clienteId: id del cliente a reactivar
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
        console.error(err);
        return null;
    }
}

