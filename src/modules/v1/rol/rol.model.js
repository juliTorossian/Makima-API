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
        
        let response = [];

        for (let i = 0; i < rows.length; i++) {
            const r = rows[i];
            const [ permisos ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ r.rolId ]);

            let rol = {
                "id": r.rolId,
                "descripcion": r.rolDescripcion,
                "permisos": []
            }

            for (let j = 0; j < permisos.length; j++) {
                const p = permisos[j];

                rol.permisos.push({
                    "clave": p.rolPClave,
                    "nivel": p.rolPNivel
                })
            }
            response.push(rol);
            
        }

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
            "permisos": []
        };
        const [ permisos ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ rows[0].rolId ]);

        for (let j = 0; j < permisos.length; j++) {
            const p = permisos[j];

            response.permisos.push({
                "clave": p.rolPClave,
                "nivel": p.rolPNivel
            })
        }
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

        const query = "INSERT INTO rol(rolId, rolDescripcion) VALUES  (?, ?)";
        let params = [
            rol.id,
            rol.descripcion
        ];

        const [rows] = await pool.query(query, params);

        const queryPermisos = 'INSERT INTO rolPermiso(rolPRol, rolPClave, rolPNivel) VALUES ?';
        let paramsPermisos = [];

        rol.permisos.map( (p) => {
            let aux = [rol.id, p.clave, p.nivel]
            paramsPermisos.push(aux);
        })
        const [rowsPermisos] = await pool.query(queryPermisos, [paramsPermisos]);

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

        const query = "UPDATE rol SET rolDescripcion = ? WHERE rolId = ?";
        let params = [
            rol.descripcion,
            rol.id
        ];
        const [rows] = await pool.query(query, params);

        const [auxRows] = await pool.query("DELETE FROM rolpermiso WHERE rolPRol = ?", [rol.id])
        const queryPermisos = 'INSERT INTO rolPermiso(rolPRol, rolPClave, rolPNivel) VALUES ?';
        let paramsPermisos = [];

        rol.permisos.map( (p) => {
            let aux = [rol.id, p.clave, p.nivel]
            paramsPermisos.push(aux);
        })
        const [rowsPermisos] = await pool.query(queryPermisos, [paramsPermisos]);

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

        const [auxRows] = await pool.query("DELETE FROM rolpermiso WHERE rolPRol = ?", [rolId])
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
