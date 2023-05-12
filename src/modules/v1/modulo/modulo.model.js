// TOOK VER TOOKS LOS MODULOS
// TOOK VER UN MODULO
// TOOK CREAR UN MODULO
// TOOK MODIFICAR MODULO
// TOOK ELIMINAR MODULO
// TOOK VER BUSQUEDA MODULO
// TOOK VER MODULOS POR PADREs

import { pool } from '../../../db.js';

/** 
 ** Busca todos los modulos
 *
*/
export const getModulos = async () => {

    try{

        const query = "SELECT * FROM modulo";
        let params = []

        const [rows] = await pool.query(query, params);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca un modulo
 *
 *i @param moduloId: id del modulo a consultar
*/
export const getModulo = async (moduloId) => {

    try{

        const query = "SELECT * FROM modulo WHERE moduloId = ?";
        let params = [moduloId]

        const [rows] = await pool.query(query, params);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo modulo
 *
 *i @param modulo: objeto con los datos necesarios del modulo - especificado mas abajo
*/
export const insertModulo = async (modulo) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "id": "CUS",                 //* id del modulo
        "nombre": "CUSTOM",          //* nombre del modulo
        "padre": "STK"                   //* modulo padre
    }
    **/

    try{

        const query = "INSERT modulo(moduloId, moduloNombre, moduloPadre) VALUE (?, ?, ?)";
        let params = [
            modulo.id,
            modulo.nombre,
            (modulo.padre != "") ? modulo.padre : null
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
 ** Modifica un modulo
 *
 *i @param modulo: objeto con los datos modificados del modulo - especificado mas abajo
*/
export const updateModulo = async (modulo) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "id": "CUS",                 //* id del modulo
        "nombre": "CUSTOM",          //* nombre del modulo
        "padre": "STK"               //* modulo padre
    }
    **/

    try{

        const query = "UPDATE modulo SET moduloNombre = ?, moduloPadre = ? WHERE moduloId = ?";
        let params = [
            modulo.nombre,
            (modulo.padre != "") ? modulo.padre : null,
            modulo.id
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Eliminar un modulo
 *
 *i @param moduloId: id del modulo a eliminar
*/
export const deleteModulo = async (moduloId) => {

    try{

        const query = "DELETE FROM modulo WHERE moduloId = ?";
        let params = [
            moduloId
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca todos los modulos formato busqueda
 *
*/
export const getModulosBusqueda = async () => {

    try{

        const query = 'SELECT CONCAT(moduloId, " - ", moduloNombre) AS busqueda FROM modulo';
        let params = []

        const [rows] = await pool.query(query, params);
        
        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca TOOKs los modulos con el mismo padre
 *
 *i @param padreId: id del modulo padre
*/
export const getModulosPadre = async (padreId) => {

    try{

        const query = 'SELECT * FROM modulo WHERE moduloPadre = ?';
        let params = [
            padreId
        ];

        const [rows] = await pool.query(query, params);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

