import { pool } from '../../../db.js';

/**
 * Busca todos los roles
 */
export const getRoles = async () => {
    try {
        const query = "SELECT * FROM rol";
        let params = [];
        const [rows] = await pool.query(query, params);
        let response = [];

        for (let i = 0; i < rows.length; i++) {
            const r = rows[i];
            let rol = format(r);
            rol.permisos = await getPermisosPorRol(rol.id)
            response.push(rol);
        }

        return response;
    }catch (err) {
        throw new Error(err);
    }
}


/**
 * Busca rol por id
 * @param {string} rolId - Id del rol
 * @returns Rol
 */
export const getRol = async (rolId) => {
    try {
        const query = "SELECT * FROM rol WHERE rolId = ?";
        let params = [rolId]
        const [rows] = await pool.query(query, params);
        let response = format(rows[0]);
        response.permisos = await getPermisosPorRol(rolId);

        return response;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Crea un nuevo Rol
 * @param {Object} rol 
 */
export const insertRol = async (rol) => {
    try {
        const query = "INSERT INTO rol(rolId, rolDescripcion) VALUES  (?, ?)";
        let params = [
            rol.id,
            rol.descripcion
        ];
        const [rows] = await pool.query(query, params);
        if (rol.permisos){
            insertPermiso(rol.id, rol.permisos)
        }

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Modifica un rol
 * @param {Object} rol 
 */
export const updateRol = async (rol) => {
    try {
        const query = "UPDATE rol SET rolDescripcion = ? WHERE rolId = ?";
        let params = [
            rol.descripcion,
            rol.id
        ];
        const [rows] = await pool.query(query, params);
        // elimino todos los permisos del rol
        deletePermisosPorRol(rol.id);
        if (rol.permisos){
            insertPermiso(rol.id, rol.permisos)
        }

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Elimina el rol y sus permisos
 * @param {string} rolId 
 */
export const deleteRol = async (rolId) => {
    try {
        // elimino los permisos
        deletePermisosPorRol(rolId)
        const query = "DELETE FROM rol WHERE rolId = ?";
        let params = [
            rolId
        ];
        const [rows] = await pool.query(query, params);

        return rows.affectedRows;
    }catch (err) {
        throw new Error(err);
    }
}

/**
 * Busca los permisos de un rol
 * @param {string} rolId 
 * @returns Permisos de un rol
 */
async function getPermisosPorRol(rolId) {
    try {
        const [ rows ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ rolId ]);
        let permisos = []
        rows.map( (row) => {
            permisos.push(formatPermiso(row))
        });

        return permisos;
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * Crea un registro de permiso
 * @param {string} rol
 * @param {Objeto[]} permisos
 */
async function insertPermiso(rol, permisos) {
    try {
        const query = 'INSERT INTO rolPermiso(rolPRol, rolPClave, rolPNivel) VALUES ?';
        let params = [];

        permisos.map( (p) => {
            let aux = [rol, p.clave, p.nivel]
            params.push(aux);
        })
        const [rows] = await pool.query(query, [params]);

        return rows.affectedRows;
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * Elimina los permisos de un rol
 * @param {string} rol
 */
async function deletePermisosPorRol(rol) {
    try {
        const query = "DELETE FROM rolpermiso WHERE rolPRol = ?";
        let params = [
            rol
        ];
        const [rows] = await pool.query(query, params);
        return rows.affectedRows;
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} rol - Entidad rol
 * @returns Objeto rol formateado
 */
function format(rol){
    return {
        id: rol.rolId,
        descripcion: rol.rolDescripcion,
        permisos: []
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} permiso - Entidad permiso
 * @returns Objeto permiso formateado
 */
function formatPermiso(permiso){
    return {
        clave: permiso.rolPClave,
        nivel: permiso.rolPNivel
    }
}