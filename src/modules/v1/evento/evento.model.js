import { pool } from '../../../db.js';
import crypto from 'node:crypto';

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { getUsuario } from '../usuario/usuario.model.js';
import { getComentarioTarea, getTareaAccionCompleta } from '../tarea/tarea.model.js';
import { getTipoEvento } from '../tipoEvento/tipoEvento.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/** 
 * Busca todos los eventos abiertos en la base de datos
 *
 * @param {number} page - nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
*/
export const getEventos = async (page) => {
    try{
        const totalRows = 5;
        page = parseInt(page);
        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos(?,?,?)';
        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);

        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
        }

        const [ total ] = await pool.query("SELECT count(eventoId) as 'total' FROM evento");
        const totalPages = Math.ceil(total[0].total / totalRows);
        const [rows] = await pool.query(query, params);
        let results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results": await formatearEvento(rows[0])
        };
        return results;
    }catch (err){
        throw new Error(err);
    }
};

/** 
 * Busca todos los eventos abiertos que le corresponden a un usuario
 *
 * @param {number} page - nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
 * @param {string} usuario - id de usuario a consultar
*/
export const getEventosUsuario = async (page, usuario) => {
    try{
        const totalRows = 5;
        page = parseInt(page);

        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos_usuario(?, ?, ?, ?)';

        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);
            params.push(usuario);
        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
            params.push(usuario);
        }

        const [ total ] = await pool.query("SELECT COUNT(e.eventoId) as 'total' FROM audiEvento AS auE INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento WHERE auE.audiEEtapa = e.eventoEtapa AND auE.audiEUsuario = '" +usuario+"'");
        const totalPages = Math.ceil(total[0].total / totalRows);

        const [rows] = await pool.query(query, params);

        let results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results": await formatearEvento(rows[0])
        };
        return results;
    }catch (err){
        throw new Error(err);
    }
};

/** 
 * Busca todos los eventos abiertos pertenecientes a un rol
 *
 * @param {number} page - nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
 * @param {string} rol -  codigo de rol con el cual se realiza el filtro
*/
export const getEventosRol = async (page, rol) => {
    try{
        const totalRows = 5;
        page = parseInt(page);

        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos_rol(?, ?, ?, ?)';

        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);
            params.push(rol);

        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
            params.push(rol);
        }
        
        const [ total ] = await pool.query("SELECT COUNT(e.eventoId) as 'total' FROM audiEvento AS auE INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario WHERE auE.audiEEtapa = e.eventoEtapa AND usu.usuarioRol = '" +rol.toUpperCase() +"'");
        const totalPages = Math.ceil(total[0].total / totalRows);

        const [rows] = await pool.query(query, params);

        const results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results": await formatearEvento(rows[0])
        };

        return results;
    
    }catch (err){
        throw new Error(err);
    }
};

/** 
 * Busca un evento en especifico
 *
 * @param {string} eventoId - id del evento a buscar
*/
export const getEvento = async (eventoId) => {
    try{
        const query = "SELECT 	e.*,                                                                                                 \
                                ta.tareaNombre,                                                                                                 \
                                (SELECT clienteId FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'clienteId',                    \
                                (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',                    \
                                (SELECT clienteSigla FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'clienteSigla',                    \
                                (SELECT productoId FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'productoId',               \
                                (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',               \
                                (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta'        \
                        FROM evento as e                                                                                                        \
                        LEFT JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo                                                           \
                        LEFT JOIN tarea as ta ON ta.tareaId = tet.etTarea                                                                      \
                        WHERE	(e.eventoEtapa = tet.etEtapa OR ((SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) = true)) \
                        AND 	e.eventoId = ?  \
                    "
        const params = [eventoId]

        const [rows] = await pool.query(query, params);
        let results = await formatearEvento(rows);
        return results[0];
    }catch (err){
        throw new Error(err);
    }


};

/** 
 * Devuelve detalle del evento
 *
 * @param {string} eventoId - id del evento a buscar
*/

export const getEventoDetalle = async (eventoId) => {
    try{
        const query = "SELECT 	e.*,    \
                                (SELECT tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) AS eventoPropio,   \
                                (SELECT etTarea FROM evento_tarea AS et WHERE et.etEvento = e.eventoTipo AND et.etEtapa = e.eventoEtapa) AS tareaActual,    \
                                (SELECT getEtapaSig_evento(e.eventoTipo, e.eventoEtapa)) AS sigEtapa,   \
                                (SELECT etTarea FROM evento_tarea AS et WHERE et.etEvento = e.eventoTipo AND et.etEtapa = (SELECT getEtapaSig_evento(e.eventoTipo, e.eventoEtapa))) AS sigTarea,    \
                                (SELECT getEtapaAnt_evento(e.eventoTipo, e.eventoEtapa)) AS antEtapa,   \
                                (SELECT etTarea FROM evento_tarea AS et WHERE et.etEvento = e.eventoTipo AND et.etEtapa = (SELECT getEtapaAnt_evento(e.eventoTipo, e.eventoEtapa))) AS antTarea,    \
                                (SELECT COUNT(*) FROM evento_tarea WHERE etEvento = e.eventoTipo) AS totalEtapas    \
                        FROM evento AS e    \
                        INNER JOIN usuario AS u ON u.usuarioId = getUsuarioActivoEvento(e.eventoId) \
                        WHERE e.eventoId = ?    \
                    "
        const params = [
            eventoId
        ];
        const [rows] = await pool.query(query, params);
        let eventoDetalle = null;
        if (rows.length > 0){
            let actTarea = null;
            if (rows[0].tareaActual){
                const [actTareaAux] = await pool.query("SELECT * FROM tarea WHERE tareaId = ?", rows[0].tareaActual);
                if (actTareaAux){
                    actTarea = {
                        "id": actTareaAux[0].tareaId,
                        "nombre": actTareaAux[0].tareaNombre,
                        "rol": actTareaAux[0].tareaRol,
                        "controla": actTareaAux[0].tareaControla,
                        "clave": actTareaAux[0].tareaClave,
                        "reqComentario": actTareaAux[0].tareaComentario,
                        "completada": await getTareaAccionCompleta(eventoId, actTareaAux[0].tareaClave, rows[0].eventoEtapa),
                        "comentario": ((actTareaAux[0].tareaClave) || (actTareaAux[0].tareaComentario)) ? await getComentarioTarea(eventoId, actTareaAux[0].tareaClave, rows[0].eventoEtapa) : ""
                    }
                }
            }
            let sigTarea = null;
            if (rows[0].sigTarea){
                const [sigTareaAux] = await pool.query("SELECT * FROM tarea WHERE tareaId = ?", rows[0].sigTarea);
                if (sigTareaAux){
                    sigTarea = {
                        "id": sigTareaAux[0].tareaId,
                        "nombre": sigTareaAux[0].tareaNombre,
                        "rol": sigTareaAux[0].tareaRol,
                        "controla": sigTareaAux[0].tareaControla,
                        "clave": sigTareaAux[0].tareaClave,
                        "comentario": sigTareaAux[0].tareaComentario
                    }
                }
            }
            let antTarea = null;
            if (rows[0].antTarea){
                const [antTareaAux] = await pool.query("SELECT * FROM tarea WHERE tareaId = ?", rows[0].antTarea);
                if (antTareaAux){
                    antTarea = {
                        "id": antTareaAux[0].tareaId,
                        "nombre": antTareaAux[0].tareaNombre,
                        "rol": antTareaAux[0].tareaRol,
                        "controla": antTareaAux[0].tareaControla,
                        "clave": antTareaAux[0].tareaClave,
                        "comentario": antTareaAux[0].tareaComentario
                    }
                }
            }
            const [estimacionQuery] = await pool.query("SELECT * FROM eventoEstimacion WHERE eEstEvento = ?", eventoId);
            let estimacion = {
                "total": 0,
                "detalle": []
            }

            estimacionQuery.map( (est) => {
                let aux = {
                    "rol": est.eEstRol,
                    "estimacion": est.eEstEstimacion
                }
                estimacion.total += est.eEstEstimacion
                estimacion.detalle.push(aux)
            })
            const [horas] = await pool.query("SELECT sum(horaTotal) AS total FROM registrohora INNER JOIN hora ON horaRegistro = regHoraId WHERE horaEvento = ? ORDER BY regHoraFecha, horaInicio", eventoId);
            eventoDetalle = {
                                "eventoCircuito": {
                                    "act": {
                                        "tiene": null,    
                                        "etapa": rows[0].eventoEtapa,
                                        "tarea": actTarea
                                    },
                                    "sig": {
                                        "tiene": (rows[0].sigEtapa > 0),
                                        "etapa": rows[0].sigEtapa,
                                        "tarea": sigTarea
                                    },
                                    "ant": {
                                        "tiene": (rows[0].antEtapa > 0),
                                        "etapa": rows[0].antEtapa,
                                        "tarea": antTarea
                                    },
                                    "totalEtapas": rows[0].totalEtapas
                                },
                                "eventoHoras": {
                                    "estimacion": estimacion,
                                    "trabajadas": (horas[0].total) ? horas[0].total : 0
                                }
                            }
            //"estimacion": (rows[0].eventoEstimacion > 0) ? rows[0].eventoEstimacion : 0 ,
        }
        return eventoDetalle;
    }catch (err){
        throw new Error(err);
    }
};

/** 
 * Crea un nuevo evento
 *
 * @param {object} evento - objeto con los datos necesarios del evento - especificado mas abajo
*/
export const insertEvento = async (evento) => {
    try{
        const query = "CALL insert_eventos(?,?,?,?,?,?,?,?)";
        let params = [
            evento.tipo,
            evento.titulo,
            (evento.cliente == "") ? null : evento.cliente,
            (evento.producto == "") ? null : evento.producto,
            (evento.modulo == "") ? null : evento.modulo,
            evento.usuAlta,
            evento.prioridad,
            evento.descripcion
        ]

        const [rows] = await pool.query(query, params);
        const eventoId = rows[0][0].eventoId;
        // if (evento.madre){
        //     await pool.query("UPDATE evento SET eventoEsMadre = true WHERE eventoId = ? AND eventoEsMadre = false", [evento.madre]);
        // }

        return {id: eventoId,...evento};
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Modifica un evento
 *
 * @param {object} evento - objeto con los datos modificados del evento - especificado mas abajo
*/
export const updateEvento = async (evento) => {
    try{
        const query = "CALL update_eventos(?,?,?,?,?,?,?)";
        let params = [
            evento.id,
            evento.titulo,
            evento.cliente,
            evento.producto,
            evento.modulo,
            evento.prioridad,
            evento.descripcion

        ]
        const [rows] = await pool.query(query, params);

        return evento;
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Elimina un evento
 *
 * @param {string} eventoId - id del evento a eliminar - soft delete
*/
export const deleteEvento = async (eventoId, usuario) => {
    try{
        const query = "CALL delete_eventos(?,?,?)";
        let params = [
            eventoId,
            usuario,
            "ELIMINO"
        ]
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Avanza la etapa de un evento
 *
 * @param {string} eventoId:        id del evento a avanzar
 * @param {string} usuarioAsignado: id del usuario que se asigna en la nueva etapa
 * @param {string} comentario:      Comentario en el avance, opcional
*/
export const avanzarEvento = async (eventoId, usuarioAsignado, comentario) => {
    try{
        const datosEvento = await getDatosEvento(eventoId);
        let [ nEtapa ] = await pool.query("SELECT getEtapaSig_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
        nEtapa = nEtapa[0];
        comentario = (comentario) ? comentario : null;

        let query = 'CALL circular_evento(?, ?, ?, ?)';
        let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado, comentario];

        const [rows] = await pool.query(query, params);

        const nuevosDatosEvento = await getDatosEvento(eventoId);
        [ nEtapa ] = await pool.query("SELECT getEtapaSig_evento('" +nuevosDatosEvento.tipo +"', " +nuevosDatosEvento.etapa +") AS nuevaEtapa");
        if (nEtapa[0].nuevaEtapa == null){
            cerrarEvento(eventoId, usuarioAsignado);
        }
        return 1;    
    }catch (err){
        throw new Error(err);
    }
};

/** 
 ** Retrocede la etapa de un evento
 *
 * @param {string} eventoId:        id del evento a retroceder
 * @param {string} usuarioAsigando: id del usuario que se asigna en la nueva etapa
 * @param {string} comentario:      comentario al retoceder, opcional
*/
export const retrocederEvento = async (eventoId, usuarioAsignado, comentario) => {
    try{
        const datosEvento = await getDatosEvento(eventoId);
        let [ nEtapa ] = await pool.query("SELECT getEtapaAnt_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
        nEtapa = nEtapa[0];
        if (nEtapa.nuevaEtapa > 0){
            comentario = (comentario) ? comentario : null;
            let query = 'CALL circular_evento(?, ?, ?, ?)';
            let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado, comentario]
            const [rows] = await pool.query(query, params);
            return 1;
        }else{
            return 0;
        }
    }catch (err){
        throw new Error(err);
    }
};

/** 
 ** Reasigna el evento a otro usuario
 *
 * @param {string} eventoId:        id del evento a reasignar
 * @param {string} usuarioAsignado: id del usuario a asignar
*/
export const reasignarEvento = async (eventoId, usuarioAsignado) => {
    try{
        const datosEvento = await getDatosEvento(eventoId);
        const query  = "CALL insert_audiEvento(?, ?, ?, ?, ?)"
        const params = [
            eventoId, 
            datosEvento.etapa, 
            usuarioAsignado,
            null,
            "REASIGNO"
        ];
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Agrega la estimacion de horas al evento
 *
 * @param {object} estimacion - objeto de estimacion
*/
export const estimarEvento = async (estimacion) => {
    try{
        const estimacionId = crypto.randomUUID();
        let query  = "SELECT eEstId FROM eventoEstimacion WHERE eEstEvento = ? AND eEstUsuario = ? AND eEstRol = ?"
        let params = [
            estimacion.evento,
            estimacion.usuario,
            estimacion.rol
        ];
        const [existe] = await pool.query(query, params);

        if (existe.length > 0){
            query = "DELETE FROM eventoEstimacion WHERE eEstId = ?"
            params = [ existe[0].eEstId ]
            const [rows] = await pool.query(query, params);
        }

        query  = "INSERT eventoEstimacion(eEstId, eEstEvento, eEstUsuario, eEstRol, eEstEstimacion) VALUES (?, ?, ?, ?, ?)"
        params = [
            estimacionId,
            estimacion.evento, 
            estimacion.usuario,
            estimacion.rol,
            estimacion.estimacion
        ];

        const [rows] = await pool.query(query, params);

        query  = "SELECT SUM(eEstEstimacion) AS total FROM eventoEstimacion WHERE eEstEvento = ?"
        params = [
            estimacion.evento
        ];
        const [total] = await pool.query(query, params);
        query  = "UPDATE evento SET eventoEstimacion = ? WHERE eventoId = ?"
        params = [
            total[0].total,
            estimacion.evento
        ];
        
        const [update] = await pool.query(query, params);
        const detalle = await getEventoDetalle(estimacion.evento);

        let comentarioId = null;
        if (estimacion.comentario){
            comentarioId = crypto.randomUUID();

            const queryComm = 'INSERT INTO eventoadicion(eAdId, eAdEvento, eAdTipo , eAdComentario, eAdAdjFile, eAdFecha) VALUES (?, ?, "COMENTARIO", ?, 0, Now())'
            const paramsComm = [
                comentarioId,
                estimacion.evento,
                estimacion.comentario
            ];

            const [comm] = await pool.query(queryComm, paramsComm);
        }
        const [audi] = await pool.query("CALL insert_audiEvento(?, ?, (SELECT getUsuarioActivoEvento(?) ), ?, ?)", [estimacion.evento, detalle.eventoCircuito.act.etapa, estimacion.evento, comentarioId, detalle.eventoCircuito.act.tarea.clave])
        return estimacion;
    }catch (err){
        throw new Error(err);
    }

};

/** 
 ** Comenta el evento
 *
 * @param {object} comentario - objeto comentario realizado al evento, con usuario
*/
export const comentarEvento = async (comentario) => {
    try{
        const query = "CALL comentar_evento(?,?,?)";
        let params = [
            comentario.eventoId,
            comentario.comentario,
            comentario.usuario,
        ]
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Adjunta archivos al evento
 *
 * @param {string} eventoId: evento adjuntado
 * @param {string} usuarioId: usuario que adjunto
 * @param {file[]} archivos: array de archivos a adjuntar
*/
export const adjuntarEvento = async (eventoId, usuarioId, archivos) => {
    try{
        let res = 1;
        for (let i = 0; i < archivos.length; i++) {
            const archivo = archivos[i];

            let pathFile = archivo.path;
            let nameFile = archivo.originalname;
            let mimeFile = archivo.mimetype;
            
            const query = "CALL adjuntar_evento(?,?,?,?,?)";
            let params = [
                eventoId,
                usuarioId,
                pathFile,
                nameFile,
                mimeFile
            ]
            const [rows] = await pool.query(query, params);
        }
        return res;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver los comentarios de un evento
 *
 * @param {string} eventoId: evento a cual consultar
*/
export const getComentariosEvento = async (eventoId) => {
    try{
        let query  = "";
        let params = "";
        let res = [];
        query = " SELECT ea.eAdId, ea.eAdComentario, ea.eAdAdjFile, ea.eAdFecha, ae.audiEUsuario, u.usuarioUsuario, '' AS fileBase, '' AS fileName  \
                        FROM eventoadicion AS ea    \
                        INNER JOIN audievento AS ae ON ae.audiEAdi = ea.eAdId     \
                        INNER JOIN usuario AS u ON u.usuarioId = ae.audiEUsuario    \
                        WHERE   ea.eAdTipo = 'COMENTARIO' AND     \
                                ae.audiEEvento = ?  \
                        ORDER BY ea.eAdFecha DESC";
        params = [
            eventoId
        ];

        let [rows] = await pool.query(query, params);
        
        for (let i = 0; i < rows.length; i++){

            let query = " SELECT ea.eAdPathFile AS pathFile, ea.eAdNombreFile AS nameFile, ea.eAdMimeFile AS mimeFile  \
                        FROM eventoadicion AS ea    \
                        WHERE   ea.eAdId = ?";

            let params = [
                rows[i].eAdId
            ];

            let response = await pool.query(query, params);
            response = response[0][0];

            let fileBase = "";
            let fileName = "";
            let fileMime = "";

            if (response.pathFile != null){
                try{
                    const fileBaseAux = fs.readFileSync(response.pathFile, {encoding: 'base64'});
                    fileMime = response.mimeFile;
                    fileBase = fileBaseAux;
                    fileName = response.nameFile;    
                }catch(e){
                    
                }
            }
            const [usuario] = await pool.query("SELECT * FROM usuario WHERE usuarioId = ?", rows[i].audiEUsuario);
            res.push({
                "id": rows[i].eAdId,
                "comentario": rows[i].eAdComentario,
                "fecha": rows[i].eAdFecha,
                "usuario": {
                    "id": usuario[0].usuarioId,
                    "nombre": usuario[0].usuarioNombre,
                    "apellido": usuario[0].usuarioApellido,
                    "usuario": usuario[0].usuarioUsuario,
                    "rol": usuario[0].usuarioRol,
                },
                "adjunto": {
                    "tiene": rows[i].eAdAdjFile,
                    "tipo": fileMime,
                    "base": fileBase,
                    "nombre": fileName
                }

            })

        }
        return res;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver los adjuntos de un evento
 *
 * @param {string} eventoId: evento a cual consultar
*/
export const getAdjuntosEvento = async (eventoId) => {
    try{
        let query  = "";
        let params = "";
        let adjuntos = [];
        query = "SELECT ea.eAdId, ea.eAdComentario, ea.eAdAdjFile, ea.eAdFecha, ae.audiEUsuario, u.usuarioUsuario, '' AS fileBase, '' AS fileName  \
                        FROM eventoadicion AS ea    \
                        INNER JOIN audievento AS ae ON ae.audiEAdi = ea.eAdId     \
                        INNER JOIN usuario AS u ON u.usuarioId = ae.audiEUsuario    \
                        WHERE   ea.eAdTipo = 'ADJUNTO' AND     \
                                ae.audiEEvento = ?  \
                        ORDER BY ea.eAdFecha DESC";
        params = [
            eventoId
        ];

        let [rows] = await pool.query(query, params);
        for (let i = 0; i < rows.length; i++){

            let query = "SELECT ea.eAdId, ea.eAdPathFile AS pathFile, ea.eAdNombreFile AS nameFile, ea.eAdMimeFile AS mimeFile  \
                        FROM eventoadicion AS ea    \
                        WHERE   ea.eAdId = ?";

            let params = [  
                rows[i].eAdId
            ];

            let response = await pool.query(query, params);
            response = response[0];
            for (let z = 0; z < response.length; z++) {
                const file = response[z];
                let fileBase = "";
                let fileName = "";
                let fileMime = "";
    
                if (file.pathFile != null){
                    try{
                        const fileBaseAux = fs.readFileSync(file.pathFile, {encoding: 'base64'});
    
                        fileMime = file.mimeFile;
                        fileBase = fileBaseAux;
                        fileName = file.nameFile;    
                    }catch(e){
                        console.log("No existe el archivo");
                    }
                    adjuntos.push({
                        "id": file.eAdId,
                        "tipo": fileMime,
                        "base": fileBase,
                        "nombre": fileName
                    })
                }
            }
        }
        return adjuntos;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver los adjuntos de un evento
 *
 * @param {string} eventoId - evento a cual consultar
*/
export const deleteAdjunto = async (adicionId) => {
    try{
        let query = "SELECT eAdId, eAdPathFile AS pathFile FROM eventoadicion WHERE eAdId = ?";
        let params = [
            adicionId
        ]
        let [rows] = await pool.query(query, params);
        const pathFile = rows[0].pathFile;
        fs.rmSync(pathFile);
        query = "DELETE FROM eventoadicion WHERE eAdId = ?";
        params = [
            adicionId
        ]
        [rows] = await pool.query(query, params);

        return 1;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Ver la vida de un evento
 *
 * @param {string} eventoId: evento a cual consultar
*/
export const getVidaEvento = async (eventoId) => {
    try{
        const query = ` SELECT 	(SELECT CONCAT(eventoTipo, "-", eventoNumero) FROM evento WHERE eventoId = ae.audiEEvento) AS evento,   \
                                audiEEtapa,     \
                                audiEUsuario,     \
                                (SELECT t.tareaNombre FROM tarea AS t INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId WHERE et.etEvento = e.eventoTipo AND et.etEtapa = audiEEtapa) AS tarea,   \
                                (SELECT usuarioUsuario FROM usuario WHERE usuarioId = ae.audiEUsuario) AS usuario,  \
                                (SELECT usuarioColor FROM usuario WHERE usuarioId = ae.audiEUsuario) AS usuarioColor,  \
                                audiEAccion,    \
                                ea.eAdComentario,   \
                                audiEFecha  \
                        FROM audievento AS ae   \
                        LEFT JOIN eventoadicion AS ea ON ea.eAdId = ae.audiEAdi \
                        INNER JOIN evento AS e ON e.eventoId = ae.audiEEvento   \
                        WHERE ae.audiEEvento = "${eventoId}"   \
                        ORDER BY ae.audiEFecha DESC`;

        let params = [
            eventoId
        ];
        const [rows] = await pool.query(query, params);

        let response = []
        rows.map( (row) => {
            let res = {
                "etapa": row.audiEEtapa,
                "tarea": row.tarea,
                "usuario": {
                    "id": row.audiEUsuario,
                    "usuario": row.usuario,
                    "color": row.color
                },
                "accion": row.audiEAccion,
                "comentario": row.eAdComentario,
                "fecha": row.audiEFecha
            }
            response.push(res);
        });
        return response;
    }catch (err){
        throw new Error(err);
    }
}

/**
 ** Get datos para tabla tareasPorTipo
 *
 * @param {string} rol - rol a consultar
*/
export const getTareasPorTipo = async (rol) => {
    try{
        let params = []
        let query = "SELECT 	count(e.eventoId) AS cantidadEventos,   \
                                e.eventoTipo,   \
                                (SELECT t.tareaNombre   \
                                FROM tarea AS t \
                                INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId \
                                WHERE et.etEvento = e.eventoTipo AND et.etEtapa = e.eventoEtapa) AS tarea   \
                        FROM evento as e    \
                        LEFT JOIN tipoevento AS tp ON tp.tipoEventoId = e.eventoTipo    \
                        WHERE 	e.eventoCerrado = false AND \
                                tp.tipoEventoPropio = 0 \
                        ";

        if (rol != undefined){
            query += "AND (SELECT t.tareaRol FROM tarea AS t INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId WHERE et.etEvento = e.eventoTipo AND et.etEtapa = e.eventoEtapa) = ?";
            params.push(rol)
        }

        query += "GROUP BY e.eventoEtapa, e.eventoTipo    \
                  ORDER BY e.eventoTipo, e.eventoEtapa";

        const [rows] = await pool.query(query, params);
        const [tiposEvento] = await pool.query("SELECT * FROM tipoEvento WHERE tipoEventoPropio = false AND (SELECT gacieventos.getCantEventosxTipoEvento(tipoEventoId)) > 0");
        const [tareas] = await pool.query("SELECT * FROM tarea");

        let response = {
            "data": [],
            "tipos": [],
            "tareas": []
        };
        rows.map( (row) => {
            response.data.push({
                "cantidad": row.cantidadEventos,
                "tipo": row.eventoTipo,
                "tarea": row.tarea
            });
        });
        tiposEvento.map( (tipo) => {
            response.tipos.push({
                "id": tipo.tipoEventoId,
                "descripcion": tipo.tipoEventoDesc,
                "activo": tipo.tipoEventoActivo,
                "color": tipo.tipoEventoColor,
                "propio": tipo.tipoEventoPropio
            });
        });
        tareas.map( (tarea) => {
            response.tareas.push({
                "id": tarea.tareaId,
                "nombre": tarea.tareaNombre,
                "rol": tarea.tareaRol,
                "color": tarea.tareaColor
            });
        })

        return response;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Cerrar un evento
 *
 * @param {string} eventoId: id del evento a cerrar
 * @param {string} usaurio: id del usuario quien cerro
*/
export const cerrarEvento = async (eventoId, usuario) => {
    try{
        await pool.query("UPDATE evento SET eventoCerrado = true WHERE eventoId = ?", [eventoId]);
        const data = await getDatosEvento(eventoId);
        await pool.query("CALL insert_audiEvento(?, ?, ?, ?, ?)", [eventoId, data.etapa, usuario, null, 'CERRO']);

        return 1;
    }catch (err){
        throw new Error(err);
    }
}

// SUBS

/** 
 ** Busca datos necesariso de un evento
 *
 * @param {string} id: id del evento a buscar
 *
 * @return {object} datosEvento:
 *  {
 *      "tipo"      //i tipo de evento   
 *      "etapa"     //i etapa actual del evento
 *  }
*/
async function getDatosEvento(id){
    let [ datosEvento ] = await pool.query("SELECT  eventoTipo AS tipo,     \
                                                    eventoEtapa AS etapa    \
                                            FROM evento as e    \
                                            WHERE e.eventoId = '" +id +"'"
                                            );
    datosEvento = datosEvento[0];
    return datosEvento;
}

/** 
 ** Formatea el evento para la respuesta
 *
 * @param {string} id: id del evento a buscar
 * @return {object} evento formateado
*/
async function formatearEvento(eventos){
    let eventosFinal = [];

    for (let i = 0; i < eventos.length; i++) {
        const row = eventos[i];
        const usuarioAlta = await getUsuario(row.eventoUsuarioAlta);
        const [usuActualAux] = await pool.query("SELECT getUsuarioActivoEvento(?) AS usuarioId", [ row.eventoId ]);
        const usuarioActual = await getUsuario(usuActualAux[0].usuarioId);
    
        let producto = [];
        if (row.eventoProducto){
            const [productoAux] = await pool.query("SELECT * FROM producto WHERE productoId = ?", [ row.eventoProducto ]);
            producto = {
                "id": productoAux[0].productoId,
                "sigla": productoAux[0].productoSigla,
                "nombre": productoAux[0].productoNombre,

                "entorno": productoAux[0].productoEntorno,
                "activo": productoAux[0].productoActivo
            }
        }
        let tipo = await getTipoEvento(row.eventoTipo, true);

        eventosFinal.push({
            "id": row.eventoId,
            "tipo": tipo,
            "numero": row.eventoNumero,
            "titulo": row.eventoTitulo,
            "tareaNombre": row.tareaNombre,
            "cliente": {
                "id": row.eventoCliente,
                "nombre": row.cliente
            },
            "producto": producto,
            "modulo": row.eventoModulo,
            "cerrado": row.eventoCerrado,
            "propio": row.eventoPropio,
            "prioridad": row.eventoPrioridad,
            "fechaAlta": row.eventoFechaAlta,
            "usuarioActual": usuarioActual,
            "usuarioAlta": usuarioAlta,
            // "madre": (row.eventoMadre!="") ? await getEvento(row.eventoMadre) : undefined,
            "detalle": await getEventoDetalle(row.eventoId),
            "busqueda": tipo.id + '-' +row.eventoNumero,
            "descripcion": row.eventoDesc

        })
    }
    return eventosFinal;
}