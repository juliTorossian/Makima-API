// TOOK CREAR NUEVO USUARIO
// TOOK MODIFICAR USUARIO
// TOOK ELIMINAR USUARIO - SOFT-DELETE
// TOOK INICIAR SESION CON USUARIO
// TOOK VER USUARIOS
// TOOK VER UN USUARIO
// TOOK VER LOS USUARIOS DE UN ROL
// TOOK CAMBIAR CONTRASEÑA

import { pool } from '../../../db.js';
import { cadenaAleatoria } from '../../../helper/random.js';

/** 
 ** Crea un nuevo usuario
 *
 *i @param usuario: objeto con los datos necesarios del usuario - especificado mas abajo
*/
export const insertUsuario = async (usuario) => {
     
    /** 
    {
        "nombre": "julian",         //* nombre del usuario
        "apellido": "torossian",    //* apellido del usuario
        "mail": "mail@mail.com",    //* mail del usuario
        "usuario": "usuario",       //* usuario del usuario
        "password": 123,            //* contraseña del usuario
        "rol": "ADMIN",             //* rol del usuario
        "color": "#D677A1"          //* color de usuario 
    }
    **/

    try{
        const query = 'INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioRol, usuarioActivo, usuarioColor) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?, ?, true, ?)';
        let params = [
            usuario.nombre,
            usuario.apellido,
            usuario.mail,
            usuario.usuario,
            usuario.password,
            usuario.rol,
            usuario.color
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Modificar un nuevo usuario
 *
 *i @param usuario: objeto con los datos necesarios del usuario - especificado mas abajo
*/
export const updateUsuario = async (usuario) => {
     
    /** 
    {
        "id": "id" ,                //* id del usuario
        "nombre": "julian",         //* nombre del usuario
        "apellido": "torossian",    //* apellido del usuario
        "mail": "mail@mail.com",    //* mail del usuario
        "usuario": "usuario",       //* usuario del usuario
        "password": 123,            //* contraseña del usuario
        "rol": "ADMIN",             //* rol del usuario
        "color": "#D677A1"          //* color de usuario 
    }
    **/

    try{
        let query = 'UPDATE usuario SET ';
        let params = [
        ];

        let atts = [];

        if (usuario.nombre){
            atts.push("usuarioNombre = ?");
            params.push(usuario.nombre);
        }
        if (usuario.apellido){
            atts.push("usuarioApellido = ?");
            params.push(usuario.apellido);
        }
        if (usuario.mail){
            atts.push("usuarioMail = ?");
            params.push(usuario.mail);
        }
        if (usuario.usuario){
            atts.push("usuarioUsuario = ?");
            params.push(usuario.usuario);
        }
        if (usuario.password){
            atts.push("usuarioPass = ?");
            params.push(usuario.password);
        }
        if (usuario.rol){
            atts.push("usuarioRol = ?");
            params.push(usuario.rol);
        }
        if (usuario.color){
            atts.push("usuarioColor = ?");
            params.push(usuario.color);
        }
        params.push(usuario.id);

        for (let i = 0; i < atts.length; i++) {
            let att = atts[i];
            if (i < atts.length - 1){
                att += ',';
            }
            query += att;
        }

        query += " WHERE usuarioId = ?";

        console.log(query);

        const [rows] = await pool.query(query, params);
        console.log(rows);
        return 1;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Eliminar un nuevo usuario
 *
 *i @param usuarioId: id del usuario a eliminar
*/
export const deleteUsuario = async (usuarioId) => {

    try{
        const query = 'CALL delete_usuario(?)';
        let params = [
            usuarioId
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Corrobora que existe el usuario para el inicio de sesion
 *
 *i @param usuario: usuario del usuario
 *i @param password: contraseña del usuario
*/
export const existeUsuario = async (usuario, password) => {

    
    // let query = 'SELECT COUNT(usuarioId) AS cant FROM usuario WHERE usuarioUsuario = ? AND usuarioPass = ?';
    // let query = 'SELECT * FROM usuario WHERE usuarioUsuario = ? AND usuarioPass = ?';

    try {

        let token = "";

        let query = 'SELECT usuarioId FROM usuario WHERE (usuarioUsuario = ? AND usuarioPass = ?) AND usuarioActivo = true';
        let params = [
            usuario, 
            password
        ];
        const [rows] = await pool.query(query, params);
        
        if (rows[0] != undefined){
            token = cadenaAleatoria(18);
            console.log(token);

            let queryB = 'UPDATE usuario SET usuarioSesionToken = ?, usuarioFchUltLogin = now() WHERE usuarioId = ?'
            let paramsB = [
                token,
                rows[0].usuarioId
            ]
            await pool.query(queryB, paramsB);
        }

        return token;
        
    } catch (error) {
        console.log(error);
    }


}

/** 
 ** Ver todos los usuarios
 *
*/
export const getUsuarios = async () => {

    try{
        const query = 'SELECT *, (SELECT rolDescripcion FROM rol WHERE rolId = usuarioRol) AS rolDescripcion FROM usuario';
        let params = [
        ];

        const [rows] = await pool.query(query, params);

        let response = [];
        rows.map((row) => {
            response.push({
                "id": row.usuarioId,
                "nombre": row.usuarioNombre,
                "apellido": row.usuarioApellido,
                "mail": row.usuarioMail,
                "usuario": row.usuarioUsuario,
                "rol": {
                    "codigo": row.usuarioRol,
                    "descripcion": row.rolDescripcion
                },
                "activo": row.usuarioActivo,
                "color": row.usuarioColor
            });
        });
        return response;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Ver un usuario
 *
 *i @param usuarioId: id del usuario a eliminar
*/
export const getUsuario = async (usuarioId) => {

    try{
        let usuario = null;
        const query =  'SELECT usuarioId,   \
                               usuarioNombre, \
                               usuarioApellido, \
                               usuarioMail, \
                               usuarioUsuario, \
                               usuarioRol, \
                               (SELECT rolDescripcion FROM rol WHERE rolId = usuarioRol) AS rolDescripcion, \
                               usuarioColor, \
                               usuarioActivo \
                        FROM usuario    \
                        WHERE usuarioId = ?';
        let params = [
            usuarioId
        ];
        const [rows] = await pool.query(query, params);

        if (rows[0]){
            usuario = {
                "id": rows[0].usuarioId,
                "nombre": rows[0].usuarioNombre,
                "apellido": rows[0].usuarioApellido,
                "mail": rows[0].usuarioMail,
                "usuario": rows[0].usuarioUsuario,
                "rol": {
                    "codigo": rows[0].usuarioRol,
                    "descipcion": rows[0].rolDescripcion
                },
                "color": rows[0].usuarioColor,
                "activo": rows[0].usuarioActivo
            }
        }

        return usuario;

    }catch (err){
        console.error(err);
        return null;
    }

}

/** 
 ** Ver un usuario
 *
 *i @param usuarioId: id del usuario a eliminar
*/
export const getUsuarioToken = async (usuarioToken) => {

    try{
        let usuario = null;
        const query =  'SELECT usuarioId,   \
                               usuarioNombre, \
                               usuarioApellido, \
                               usuarioMail, \
                               usuarioUsuario, \
                               usuarioRol, \
                               (SELECT rolDescripcion FROM rol WHERE rolId = usuarioRol) AS rolDescripcion, \
                               usuarioColor, \
                               usuarioActivo \
                        FROM usuario    \
                        WHERE usuarioSesionToken = ?';
        let params = [
            usuarioToken
        ];
        const [rows] = await pool.query(query, params);

        if (rows[0]){
            usuario = {
                "id": rows[0].usuarioId,
                "nombre": rows[0].usuarioNombre,
                "apellido": rows[0].usuarioApellido,
                "mail": rows[0].usuarioMail,
                "usuario": rows[0].usuarioUsuario,
                "rol": {
                    "codigo": rows[0].usuarioRol,
                    "descipcion": rows[0].rolDescripcion
                },
                "color": rows[0].usuarioColor,
                "activo": rows[0].usuarioActivo
            }
        }

        return usuario;

    }catch (err){
        console.error(err);
        return null;
    }

}

/** 
 ** Ver un usuario detalle
 *
 *i @param usuarioId: id del usuario a eliminar
*/
/*
{
    "id": "264b0ce34fa762a3dba657fe",
    "nombre": "julian",
    "apellido": "torossian",
    "usuario": "JTAdmin",
    "mail": "jtorossian@gaci.com.ar",
    "rol": "ADMIN",
    "rolDecripcion": "Administrador",
}
*/
export const getUsuarioDetalle = async (usuarioId) => {

    try{
        const query = ' SELECT  u.usuarioId,    \
                                u.usuarioNombre,    \
                                u.usuarioApellido,  \
                                u.usuarioUsuario,   \
                                u.usuarioMail,  \
                                u.usuarioColor,    \
                                u.usuarioRol,   \
                                (SELECT rolDescripcion FROM rol WHERE rolId = u.usuarioRol) AS rolDescripcion   \
                        FROM usuario AS u   \
                        WHERE usuarioId = ?';
        let params = [
            usuarioId
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);

        // let detalle = {
        //     "id": rows[0].usuarioId,

        // }

        return rows[0];

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Ver usuarios de un rol
 *
 *i @param rol: rol de busqueda
*/
export const getUsuariosRol = async (rol) => {

    try{
        const query = 'SELECT *  FROM usuario WHERE usuarioActivo = true AND usuarioRol = ?';
        let params = [
            rol
        ];

        const [rows] = await pool.query(query, params);
        return rows;

    }catch (err){
        console.error(err);
        return 0;
    }

}


/*
 ! 
 ! ESTADISTICAS
 ! 
*/ 

/** 
 ** Ver las estaditicas de
 *
 *i @param rol: rol de busqueda
*/
export const getEventosUsuarioEstadisticas = async (usuario) => {

    try{



        const query =  'CALL getEventosAsignadosUsuario(?)'; 

        let params = [
            usuario
        ];

        // console.log(query);

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);

        return rows[0];

    }catch (err){
        console.error(err);
        return 0;
    }

}