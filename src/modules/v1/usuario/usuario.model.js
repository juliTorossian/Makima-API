// TOOK CREAR NUEVO USUARIO
// TOOK MODIFICAR USUARIO
// TOOK ELIMINAR USUARIO - SOFT-DELETE
// TOOK INICIAR SESION CON USUARIO
// TOOK VER USUARIOS
// TOOK VER UN USUARIO
// TOOK VER LOS USUARIOS DE UN ROL
// TOOK CAMBIAR CONTRASEÑA

import { pool } from '../../../db.js';

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

    let query = 'SELECT usuarioId, usuarioNombre, usuarioApellido, usuarioUsuario, usuarioRol, rolDescripcion FROM usuario INNER JOIN rol ON rolId = usuarioRol WHERE usuarioUsuario = ? AND usuarioPass = ?';

    let params = [
        usuario, 
        password
    ];

    const [rows] = await pool.query(query, params);

    // console.log(rows);
    // console.log(rows[0]);

    // return (rows[0].cant > 0);
    return (rows[0]);

}

/** 
 ** Ver todos los usuarios
 *
*/
export const getUsuarios = async () => {

    try{
        const query = 'SELECT * FROM usuario WHERE usuarioActivo = true';
        let params = [
        ];

        const [rows] = await pool.query(query, params);
        return rows;

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
        const query = 'SELECT * FROM usuario WHERE usuarioId = ?';
        let params = [
            usuarioId
        ];

        const [rows] = await pool.query(query, params);
        return rows;

    }catch (err){
        console.error(err);
        return 0;
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

        console.log(query);

        const [rows] = await pool.query(query, params);

        console.log(rows[0]);

        return rows[0];

    }catch (err){
        console.error(err);
        return 0;
    }

}