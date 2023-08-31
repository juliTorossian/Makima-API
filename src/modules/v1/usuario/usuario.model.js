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
import crypto from 'node:crypto';
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
        "color": "#D677A1",         //* color de usuario 
        "rol": {
            rol1, rol2, rol3
        }
    }
    **/

    try{

        // const usuarioId = cadenaAleatoria(24);
        const usuarioId = crypto.randomUUID();

        console.log(usuarioId);
        console.log(usuarioId.length);

        const query = 'INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioActivo, usuarioColor) VALUES (?, ?, ?, ?, ?, ?, true, ?)';
        let params = [
            usuarioId,
            usuario.nombre,
            usuario.apellido,
            usuario.mail,
            usuario.usuario,
            usuario.password,
            usuario.color
        ];


        // console.log(usuario.rol)

        const [rows] = await pool.query(query, params);
        await insertRoles(usuarioId, usuario.rol);

        let nuevoUsuario = {
            id: usuarioId,
            ...usuario
        }

        return nuevoUsuario;

    }catch (err){
        console.error(err);
        return null;
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
        "color": "#D677A1",         //* color de usuario 
        "rol": {
            rol1, rol2
        }             //* rol del usuario
    }
    **/

    try{

        console.log(usuario)

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

        // console.log(query);

        const [rows] = await pool.query(query, params);

        if (usuario.rol){
            await pool.query("DELETE FROM usuarioRol WHERE usuRolUsuario = ?", [ usuario.id ])
            await insertRoles(usuario.id, usuario.rol);
        }

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
        const query = 'SELECT * FROM usuario';
        let params = [];

        const [rows] = await pool.query(query, params);
        // console.log(rows)
        
        // console.log(rows);
        // console.log(rows[0]);
        // console.log(rows[1]);

        let response = [];
        // rows.map((row) => {
            
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            // console.log(row);

            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ row.usuarioId ])
            // console.log(roles);
            let rol = [];
            roles.map( (r) => {
                // console.log(r);
                rol.push({
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "controlTotal": r.rolCtrlTotal,
                    "controlEvento": r.rolCtrlEvento,
                    "controlCliente": r.rolCtrlCliente,
                    "controlProducto": r.rolCtrlProducto,
                    "controlTipo": r.rolCtrlTipo,
                    "controlHora": r.rolCtrlHora,
                    "controlUsuario": r.rolCtrlUsuario
                })
            });

            response.push({
                "id": row.usuarioId,
                "nombre": row.usuarioNombre,
                "apellido": row.usuarioApellido,
                "mail": row.usuarioMail,
                "usuario": row.usuarioUsuario,
                "activo": row.usuarioActivo,
                "color": row.usuarioColor,
                "rol": rol
            });
            // "rol": {
            //     "id": row.usuarioRol,
            //     "descripcion": row.rolDescripcion
            // },
        };

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
                               usuarioColor, \
                               usuarioActivo \
                        FROM usuario    \
                        WHERE usuarioId = ?';
        let params = [
            usuarioId
        ];
        const [rows] = await pool.query(query, params);

        const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ rows[0].usuarioId ])
        let rol = [];
        roles.map( (r) => {
            // console.log(r);
            rol.push({
                "id": r.rolId,
                "descripcion": r.rolDescripcion,
                "controlTotal": r.rolCtrlTotal,
                "controlEvento": r.rolCtrlEvento,
                "controlCliente": r.rolCtrlCliente,
                "controlProducto": r.rolCtrlProducto,
                "controlTipo": r.rolCtrlTipo,
                "controlHora": r.rolCtrlHora,
                "controlUsuario": r.rolCtrlUsuario
            })
        });

        if (rows[0]){
            usuario = {
                "id": rows[0].usuarioId,
                "nombre": rows[0].usuarioNombre,
                "apellido": rows[0].usuarioApellido,
                "mail": rows[0].usuarioMail,
                "usuario": rows[0].usuarioUsuario,
                "rol": rol,
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
                               usuarioColor, \
                               usuarioActivo \
                        FROM usuario    \
                        WHERE usuarioSesionToken = ?';
        let params = [
            usuarioToken
        ];
        const [rows] = await pool.query(query, params);

        if (rows[0]){
            
            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ rows[0].usuarioId ])
            let rol = [];
            roles.map( (r) => {
                // console.log(r);
                rol.push({
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "controlTotal": r.rolCtrlTotal,
                    "controlEvento": r.rolCtrlEvento,
                    "controlCliente": r.rolCtrlCliente,
                    "controlProducto": r.rolCtrlProducto,
                    "controlTipo": r.rolCtrlTipo,
                    "controlHora": r.rolCtrlHora,
                    "controlUsuario": r.rolCtrlUsuario
                })
            });

            usuario = {
                "id": rows[0].usuarioId,
                "nombre": rows[0].usuarioNombre,
                "apellido": rows[0].usuarioApellido,
                "mail": rows[0].usuarioMail,
                "usuario": rows[0].usuarioUsuario,
                "rol": rol,
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
        const query = 'SELECT * FROM usuarioRol INNER JOIN usuario ON usuarioId = usuRolUsuario WHERE usuRolRol = ?';
        let params = [
            rol
        ];

        const [rows] = await pool.query(query, params);
        // console.log(rows);
        let response = [];
            
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ row.usuarioId ])
            let rol = [];
            roles.map( (r) => {
                // console.log(r);
                rol.push({
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "controlTotal": r.rolCtrlTotal,
                    "controlEvento": r.rolCtrlEvento,
                    "controlCliente": r.rolCtrlCliente,
                    "controlProducto": r.rolCtrlProducto,
                    "controlTipo": r.rolCtrlTipo,
                    "controlHora": r.rolCtrlHora,
                    "controlUsuario": r.rolCtrlUsuario
                })
            });

            response.push({
                "id": row.usuarioId,
                "nombre": row.usuarioNombre,
                "apellido": row.usuarioApellido,
                "mail": row.usuarioMail,
                "usuario": row.usuarioUsuario,
                "activo": row.usuarioActivo,
                "color": row.usuarioColor,
                "rol": rol
            });
            // "rol": {
            //     "id": row.usuarioRol,
            //     "descripcion": row.rolDescripcion
            // },
        };

        return response;

    }catch (err){
        console.error(err);
        return 0;
    }

}

const insertRoles = async (usuarioId, roles) => {

    try {

        const queryRol = 'INSERT INTO usuarioRol(usuRolUsuario, usuRolRol) VALUES ?';
        let paramsRol = [];

        roles.map( (r) => {
            let aux = [usuarioId, r]
            paramsRol.push(aux);
        })
        const [rowsRol] = await pool.query(queryRol, [paramsRol]);

        // console.log(rowsRol);

    } catch (err) {
        console.log(err);
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
        let params = [ usuario ];

        const [rows] = await pool.query(query, params);

        const [tiposEvento] = await pool.query("SELECT * FROM tipoEvento WHERE tipoEventoPropio = false");
        const [tareas] = await pool.query("SELECT * FROM tarea");

        let response = {
            "data": [],
            "tipos": [],
            "tareas": []
        };

        let tiposAux = [];
        
        rows[0].map( (row) => {
            tiposAux.push(row.eventoTipo);
            response.data.push({
                "cantidad": row.cantidadEventos,
                "tipo": row.eventoTipo,
                "tarea": row.tarea
            });
        });

    //     "tipoEventoId": "CAS",
    //   "tipoEventoDesc": null,
    //   "tipoEventoActivo": 1,
    //   "tipoEventoColor": "#fb8b9f",
    //   "tipoEventoPropio": 0
        tiposEvento.map( (tipo) => {
            if ((tiposAux.indexOf(tipo.tipoEventoId)) != -1){
                response.tipos.push({
                    "id": tipo.tipoEventoId,
                    "descripcion": tipo.tipoEventoDesc,
                    "activo": tipo.tipoEventoActivo,
                    "color": tipo.tipoEventoColor,
                    "propio": tipo.tipoEventoPropio
                });
            }
        })


    //     "tareaId": "0a2cd2e6258e8ba3f1fbacec",
    //   "tareaNombre": "Aprobar",
    //   "tareaRol": "CONS"

        tareas.map( (tarea) => {
            response.tareas.push({
                "id": tarea.tareaId,
                "nombre": tarea.tareaNombre,
                "rol": tarea.tareaRol
            });
        })

        return response;

        // const query =  'CALL getEventosAsignadosUsuario(?)'; 

        // let params = [
        //     usuario
        // ];

        // // console.log(query);

        // const [rows] = await pool.query(query, params);

        // // console.log(rows[0]);

        // return rows[0];

    }catch (err){
        console.error(err);
        return 0;
    }

}