import { pool } from '../../../db.js';

/**
 * Busca todos los Entornos
 */
export const getEntornos = async () => {
    try {
        const query = "SELECT * FROM entorno";
        let params = [];
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
 * Busca un entorno en especifico
 * @param {string} entornoId - id del entorno a buscar
 * @returns Entorno
 */
export const getEntorno = async (entornoId) => {
    try {
        const query = "SELECT * FROM entorno WHERE entornoId = ?";
        let params = [entornoId]
        const [rows] = await pool.query(query, params);

        return format(rows[0]);
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Crea un nuevo registro de entorno
 * @param {Object} entorno - Entidad entorno
 */
export const insertEntorno = async (entorno) => {
    try {
        const query = "INSERT entorno(entornoId, entornoNombre) VALUE (?, ?)";
        let params = [
            entorno.id,
            entorno.nombre
        ];
        const [rows] = await pool.query(query, params);

        return entorno;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Modifica un registro de entorno
 * @param {Object} entorno - Entidad entorno
 */
export const updateEntorno = async (entorno) => {
    try {
        const query = "UPDATE entorno SET entornoNombre = ? WHERE entornoId = ?";
        let params = [
            entorno.nombre,
            entorno.id
        ];
        const [rows] = await pool.query(query, params);

        return entorno;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Elimina un entorno
 * @param {string} enotornoId - Id del entorno a eliminar
 */
export const deleteEntorno = async (enotornoId) => {
    try {
        const query = "DELETE FROM entorno WHERE entornoId = ?";
        let params = [
            enotornoId
        ];
        const [rows] = await pool.query(query, params);

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} entorno - Entidad entorno
 * @returns Objeto entorno formateado
 */
function format(entorno){
    return {
        id: entorno.entornoId,
        nombre: entorno.entornoNombre,
    }
}