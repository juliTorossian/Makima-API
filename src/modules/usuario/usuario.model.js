// TOOK CREAR NUEVO USUARIO
// TOOK MODIFICAR USUARIO
// TOOK ELIMINAR USUARIO - SOFT-DELETE
// TOOK INICIAR SESION CON USUARIO
// TOOK VER USUARIOS
// TOOK VER UN USUARIO
// TOOK VER LOS USUARIOS DE UN ROL
// TOOK CAMBIAR CONTRASEÑA

import { pool } from '../../db.js';

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
        "rol": "ADMIN"              //* rol del usuario
    }
    **/

    try{
        const query = 'INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioRol, usuarioActivo) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?, ?, true)';
        let params = [
            usuario.nombre,
            usuario.apellido,
            usuario.mail,
            usuario.usuario,
            usuario.password,
            usuario.rol
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
        "rol": "ADMIN"              //* rol del usuario
    }
    **/

    try{
        const query = 'UPDATE usuario SET usuarioNombre = ?, usuarioApellido = ?, usuarioMail = ?, usuarioUsuario = ?, usuarioPass = ?, usuarioRol = ? WHERE usuarioId = ?';
        let params = [
            usuario.nombre,
            usuario.apellido,
            usuario.mail,
            usuario.usuario,
            usuario.password,
            usuario.rol,
            usuario.id
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

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

    
    let query = 'SELECT COUNT(usuarioId) FROM usuario WHERE usuarioUsuario = ? AND usuarioPass = ?';
    let params = [
        usuario, 
        password
    ];

    const [rows] = await pool.query(query, params);

    console.log(rows);
    return rows[0];

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