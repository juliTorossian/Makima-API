// TOOK VER TOOKS LOS ENTORNOS
// TOOK VER UN ENTORNO
// TOOK CREAR UN ENTORNO
// TOOK MODIFICAR ENTORNO
// TOOK ELIMINAR ENTORNO

import { pool } from '../../db.js';

/** 
 ** Busca TOOKs los entornos
 *
*/
export const getEntornos = async () => {

    try{

        const query = "SELECT * FROM entorno";
        let params = [];

        const [rows] = await pool.query(query, params);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca un entorno
 *
 *i @param entornoId: id del entorno a consultar
*/
export const getEntorno = async (entornoId) => {

    try{

        const query = "SELECT * FROM entorno WHERE entornoId = ?";
        let params = [entornoId]

        const [rows] = await pool.query(query, params);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo entorno
 *
 *i @param entorno: objeto con los datos necesarios del entorno - especificado mas abajo
*/
export const insertEntorno = async (entorno) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "id": "CUS",                 //* id del entorno
        "nombre": "CUSTOM"           //* nombre del entorno
    }
    **/

    try{

        const query = "INSERT entorno(entornoId, entornoNombre) VALUE (?, ?)";
        let params = [
            entorno.id,
            entorno.nombre
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
 ** Modifica un entorno
 *
 *i @param entorno: objeto con los datos modificados del entorno - especificado mas abajo
*/
export const updateEntorno = async (entorno) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "id": "CUS",                 //* id del entorno
        "nombre": "CUSTOM"           //* nombre del entorno
    }
    **/

    try{

        const query = "UPDATE entorno SET entornoNombre = ? WHERE entornoId = ?";
        let params = [
            entorno.nombre,
            entorno.id
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Eliminar un entorno
 *
 *i @param enotornoId: id del entorno a eliminar
*/
export const deleteEntorno = async (enotornoId) => {

    try{

        const query = "DELETE FROM entorno WHERE entornoId = ?";
        let params = [
            enotornoId
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}