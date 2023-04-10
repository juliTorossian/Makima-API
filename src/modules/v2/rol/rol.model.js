// TOOK VER TODOS LOS ROLES
// TOOK VER UN ROL
// TOOK CREAR UN ROL
// TOOK MODIFICAR ROL
// TOOK ELIMINAR ROL


import { pool } from '../../../db.js';

/** 
 ** Busca todos los roles en la base de datos
 *
*/
export const getRoles = async () => {

    try{

        const query = "SELECT * FROM rol";
        let params = []

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        let response = [];
        rows.map( (row) => {
            response.push({
                "id": row.rolId,
                "descripcion": row.rolDescripcion,
                "nivel": row.rolNivel
            });
        });
        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca un rol
 *
 *i @param rolId: id del rol a consultar
*/
export const getRol = async (rolId) => {

    try{

        const query = "SELECT * FROM rol WHERE rolId = ?";
        let params = [rolId]

        const [rows] = await pool.query(query, params);

        let response = {
            "id": rows[0].rolId,
            "descripcion": rows[0].rolDescripcion,
            "nivel": rows[0].rolNivel
        };
        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo rol
 *
 *i @param rol: objeto con los datos necesarios del rol - especificado mas abajo
*/
export const insertRol = async (rol) => {

    /** 
    * i Objeto que tiene que llegar por parametro (rol)
    {
        "id": "CUS",                //* sigla del rol
        "descripcion": "CUSTOM",    //* nombre del rol
        "nivel": 0                  //* nivel del rol
    }
    **/

    try{

        const query = "INSERT INTO rol(rolId, rolDescripcion, rolNivel) VALUES  (?, ?, ?)";
        let params = [
            rol.id,
            rol.descripcion,
            rol.nivel
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
 ** Modifica un rol
 *
 *i @param rol: objeto con los datos modificados del rol - especificado mas abajo
*/
export const updateRol = async (rol) => {

    /** 
    * i Objeto que tiene que llegar por parametro (rol)
    {
        "id": "CUS",                //* sigla del rol
        "descripcion": "CUSTOM",    //* nombre del rol
        "nivel": 0                  //* nivel del rol
    }
    **/

    try{

        const query = "UPDATE rol SET rolDescripcion = ?, rolNivel = ? WHERE rolId = ?";
        let params = [
            rol.descripcion,
            rol.nivel,
            rol.id
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Eliminar un rol
 *
 *i @param rolId: id del rol a eliminar
*/
export const deleteRol = async (rolId) => {

    try{

        const query = "DELETE FROM rol WHERE rolId = ?";
        let params = [
            rolId
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}
