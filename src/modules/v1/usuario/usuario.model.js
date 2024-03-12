import { pool } from '../../../db.js';
import { cadenaAleatoria } from '../../../helper/random.js';
import crypto from 'node:crypto';

/** 
 ** Crea un nuevo usuario
 *
 * @param {object} usuario: objeto con los datos necesarios del usuario
*/
export const insertUsuario = async (usuario) => {
    try{
        const usuarioId = crypto.randomUUID();
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

        const [rows] = await pool.query(query, params);
        await insertRoles(usuarioId, usuario.rol);
        return { id: usuarioId, ...usuario };
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Modificar un nuevo usuario
 *
 * @param {object} usuario: objeto con los datos necesarios del usuario
*/
export const updateUsuario = async (usuario) => {
    try{
        let query = 'UPDATE usuario SET ';
        let params = [];
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
        const [rows] = await pool.query(query, params);
        if (usuario.rol){
            await pool.query("DELETE FROM usuarioRol WHERE usuRolUsuario = ?", [ usuario.id ])
            if (usuario.rol.length > 0){
                await insertRoles(usuario.id, usuario.rol);
            }
        }
        return usuario;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Eliminar un nuevo usuario
 *
 * @param {string} usuarioId: id del usuario a eliminar
*/
export const deleteUsuario = async (usuarioId) => {
    try{
        const query = 'CALL delete_usuario(?)';
        let params = [
            usuarioId
        ];

        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Corrobora que existe el usuario para el inicio de sesion
 *
 * @param {string} usuario: usuario del usuario
 * @param {string} password: contraseña del usuario
 * @param {boolean} activo: filtra usuario activo
*/
export const existeUsuario = async (usuario, password, activo=false) => {
    try {
        let token = "";
        let query = 'SELECT usuarioId FROM usuario WHERE (usuarioUsuario = ? AND usuarioPass = ?) AND usuarioActivo = ?';
        let params = [
            usuario, 
            password,
            activo
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
    } catch (err) {
        throw new Error(err);
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
        let response = [];
            
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ row.usuarioId ])
            // console.log(roles);
            let rol = [];
            for (let y = 0; y < roles.length; y++) {
                const r = roles[y];
                let rolAux = {
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "permisos": []
                }

                const [ permisos ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ r.rolId ]);
                for (let j = 0; j < permisos.length; j++) {
                    const p = permisos[j];

                    rolAux.permisos.push({
                        "clave": p.rolPClave,
                        "nivel": p.rolPNivel
                    })
                }
                rol.push(rolAux);
            }

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
        };
        return response;
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Ver un usuario
 *
 * @param {string} usuarioId: id del usuario a eliminar
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
        
        if (rows.length > 0){
            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ usuarioId ])
            let rol = [];
            for (let y = 0; y < roles.length; y++) {
                const r = roles[y];
                let rolAux = {
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "permisos": []
                }
                const [ permisos ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ r.rolId ]);
                for (let j = 0; j < permisos.length; j++) {
                    const p = permisos[j];
    
                    rolAux.permisos.push({
                        "clave": p.rolPClave,
                        "nivel": p.rolPNivel
                    })
                }
                rol.push(rolAux);
            }
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

        }
        return usuario;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver un usuario
 *
 * @param {string} usuarioId: id del usuario a eliminar
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
            for (let y = 0; y < roles.length; y++) {
                const r = roles[y];
                // console.log(r);
                let rolAux = {
                    "id": r.rolId,
                    "descripcion": r.rolDescripcion,
                    "permisos": []
                }
    
                const [ permisos ] = await pool.query("SELECT * FROM rolpermiso WHERE rolPRol = ?", [ r.rolId ]);
    
                for (let j = 0; j < permisos.length; j++) {
                    const p = permisos[j];
    
                    rolAux.permisos.push({
                        "clave": p.rolPClave,
                        "nivel": p.rolPNivel
                    })
                }
                rol.push(rolAux);
            }
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
        throw new Error(err);
    }
}

/** 
 ** Ver un usuario detalle
 *
 * @param {string} usuarioId: id del usuario a eliminar
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
        return rows[0];
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver usuarios de un rol
 *
 * @param {string} rol: rol de busqueda
*/
export const getUsuariosRol = async (rol) => {
    try{
        const query = 'SELECT * FROM usuarioRol INNER JOIN usuario ON usuarioId = usuRolUsuario WHERE usuRolRol = ?';
        let params = [
            rol
        ];
        const [rows] = await pool.query(query, params);
        let response = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [ roles ] = await pool.query("SELECT * FROM usuariorol INNER JOIN rol ON rolId = usuRolRol WHERE usuRolUsuario = ?", [ row.usuarioId ])
            let rol = [];
            roles.map( (r) => {
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
        };
        return response;
    }catch (err){
        throw new Error(err);
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
    } catch (err) {
        throw new Error(err);
    }
}

export const reactivarUsuario = async (usuarioId) => {
    try {
        const queryRol = 'UPDATE usuario SET usuarioActivo = True WHERE usuarioId = ? AND usuarioActivo = False';
        let paramsRol = [usuarioId];
        const [rows] = await pool.query(queryRol, [paramsRol]);
        return 1
    } catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Ver un usuario
 *
 * @param {string} usuarioId: id del usuario a eliminar
*/
export const getUsuarioPreferencias = async (usuarioId) => {
    try {
        const query = 'SELECT * FROM usuariopreferencia WHERE usuPUsuario = ?';
        let params = [usuarioId];
        const [rows] = await pool.query(query, params);
        let preferencias = []
        rows.map( (r) => {
            preferencias.push(r.usuPClave);
        })
        return preferencias;
    } catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Ver un usuario
 *
 * @param {string} usuarioId: id del usuario a eliminar
*/
export const setDelUsuarioPreferencias = async (usuarioId, preferencia) => {
    try {
        const query = 'SELECT usuPClave FROM usuarioPreferencia WHERE usuPUsuario = ? AND usuPClave = ?';
        const params = [
            usuarioId,
            preferencia
        ];
        const [rows] = await pool.query(query, params);
        if (!(rows[0])){
            const query = 'INSERT INTO usuariopreferencia(usuPUsuario, usuPClave) VALUES (?, ?)';
            const params = [
                usuarioId,
                preferencia
            ];
            const [rows] = await pool.query(query, params);
        }else{
            const query = 'DELETE FROM usuariopreferencia WHERE usuPUsuario = ? AND usuPClave = ?';
            const params = [
                usuarioId,
                preferencia
            ];
            const [rows] = await pool.query(query, params);
        }
        return 1
    } catch (err) {
        throw new Error(err);
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
 * @param {string} rol: rol de busqueda
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
        });

        tareas.map( (tarea) => {
            response.tareas.push({
                "id": tarea.tareaId,
                "nombre": tarea.tareaNombre,
                "rol": tarea.tareaRol,
                "color": tarea.tareaColor
            });
        });
        return response;
    }catch (err){
        throw new Error(err);
    }
}