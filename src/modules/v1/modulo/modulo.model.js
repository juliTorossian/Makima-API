import { pool } from '../../../db.js';

/** 
 ** Busca todos los modulos
*/
export const getModulos = async () => {
    try {
        const query = "SELECT * FROM modulo";
        let params = []
        const [rows] = await pool.query(query, params);
        let response = [];
        rows.map( (row) => {
            response.push(format(row));
        });

        return response;
    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca un modulo
 *
 * @param {string} moduloId - id del modulo a consultar
*/
export const getModulo = async (moduloId) => {
    try {
        const query = "SELECT * FROM modulo WHERE moduloId = ?";
        let params = [moduloId]
        const [rows] = await pool.query(query, params);

        return format(rows[0]);
    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo modulo
 *
 * @param {Object} modulo - objeto con los datos necesarios del modulo - especificado mas abajo
*/
export const insertModulo = async (modulo) => {
    try{
        const query = "INSERT modulo(moduloId, moduloNombre, moduloPadre) VALUE (?, ?, ?)";
        let params = [
            modulo.id,
            modulo.nombre,
            (modulo.padre != "") ? modulo.padre : null
        ];
        const [rows] = await pool.query(query, params);

        return modulo;
    }catch (err) {
        throw new Error(err)
    }
}

/** 
 ** Modifica un modulo
 *
 * @param {Object} modulo - objeto con los datos modificados del modulo - especificado mas abajo
*/
export const updateModulo = async (modulo) => {
    try{
        const query = "UPDATE modulo SET moduloNombre = ?, moduloPadre = ? WHERE moduloId = ?";
        let params = [
            modulo.nombre,
            (modulo.padre != "") ? modulo.padre : null,
            modulo.id
        ];
        const [rows] = await pool.query(query, params);

        return modulo;
    }catch (err) {
        throw new Error(err)
    }
}

/** 
 ** Eliminar un modulo
 *
 * @param {string} moduloId - id del modulo a eliminar
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
        throw new Error(err)
    }
}

/** 
 ** Busca todos los modulos formato busqueda
*/
export const getModulosBusqueda = async () => {
    try{
        const query = 'SELECT CONCAT(moduloId, " - ", moduloNombre) AS busqueda FROM modulo';
        let params = []
        const [rows] = await pool.query(query, params);

        return rows;
    }catch (err) {
        throw new Error(err)
    }
}

/** 
 ** Busca modulos con el mismo padre
 *
 * @param {string} padreId - id del modulo padre
*/
export const getModulosPadre = async (padreId) => {
    try{
        const query = 'SELECT * FROM modulo WHERE moduloPadre = ?';
        let params = [
            padreId
        ];

        const [rows] = await pool.query(query, params);

        let response = [];
        rows.map( (row) => {
            response.push(format(row));
        });
        return response;

    }catch (err) {
        throw new Error(err)
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} modulo - Entidad modulo
 * @returns Objeto modulo formateado
 */
function format(modulo){
    return {
        id: modulo.moduloId,
        nombre: modulo.moduloNombre,
        padre: modulo.moduloPadre
    }
}