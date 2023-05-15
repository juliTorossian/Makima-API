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
                "controlTotal": row.rolCtrlTotal,
                "controlEvento": row.rolCtrlEvento,
                "controlCliente": row.rolCtrlCliente,
                "controlProducto": row.rolCtrlProducto,
                "controlTipo": row.rolCtrlTipo,
                "controlHora": row.rolCtrlHora,
                "controlUsuario": row.rolCtrlUsuario
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
            "controlTotal": rows[0].rolCtrlTotal,
            "controlEvento": rows[0].rolCtrlEvento,
            "controlCliente": rows[0].rolCtrlCliente,
            "controlProducto": rows[0].rolCtrlProducto,
            "controlTipo": rows[0].rolCtrlTipo,
            "controlHora": row.rolCtrlHora,
            "controlUsuario": rows[0].rolCtrlUsuario
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
        "controlTotal": false
        "controlEvento": true
        "controlCliente": true
        "controlProducto": true
        "controlTipo": true
        "controlUsuario": false
    }
    **/

    try{

        const query = "INSERT INTO rol(rolId, rolDescripcion, rolCtrlTotal, rolCtrlEvento, rolCtrlCliente, rolCtrlProducto, rolCtrlTipo, rolCtrlHora, rolCtrlUsuario) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        let params = [
            rol.id,
            rol.descripcion,
            rol.controlTotal,
            rol.controlEvento,
            rol.controlCliente,
            rol.controlProducto,
            rol.controlTipo,
            rol.controlHora,
            rol.controlUsuario
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

        const query = "UPDATE rol SET rolDescripcion = ?, rolCtrlTotal = ?, rolCtrlEvento = ?, rolCtrlCliente = ?, rolCtrlProducto = ?, rolCtrlTipo = ?, rolCtrlHora = ?, rolCtrlUsuario = ? WHERE rolId = ?";
        let params = [
            rol.descripcion,
            rol.controlTotal,
            rol.controlEvento,
            rol.controlCliente,
            rol.controlProducto,
            rol.controlTipo,
            rol.controlHora,
            rol.controlUsuario,
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
