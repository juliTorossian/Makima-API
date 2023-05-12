// TODO VER TODAS LAS TAREAS
// TODO CREAR NUEVA TAREA
// TODO MODIFICAR UNA TAREA
// TODO ELIMINAR UNA TAREA
// TODO VER TAREAS NO ASIGNADAS A UN TIPO EVENTO

import { pool } from '../../../db.js';


/** 
 ** Busca todas las tareas
 *
*/
export const getTareas = async () => {

    try{
        let query = 'SELECT * FROM tarea';
        let params = [];

        const [rows] = await pool.query(query, params);

        let response = [];
        rows.map( (row) => {
            response.push({
                "id": row.tareaId,
                "nombre": row.tareaNombre,
                "rol": row.tareaRol,
                "controla": row.tareaControla,
                "clave": row.tareaClave,
                "comentario": row.tareaComentario
            });
        });
        return response;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};
/** 
 ** Busca todas las tareas
 *
*/
export const getTarea = async (id) => {

    try{
        let query = 'SELECT * FROM tarea WHERE tareaId = ?';
        let params = [
            id
        ];

        const [rows] = await pool.query(query, params);

        let response = [];
        rows.map( (row) => {
            response.push({
                "id": row.tareaId,
                "nombre": row.tareaNombre,
                "rol": row.tareaRol,
                "controla": row.tareaControla,
                "clave": row.tareaClave,
                "comentario": row.tareaComentario
            });
        });
        return response;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Crea una nueva tarea
 *
 *i @param nTarea: objeto con los datos necesarios del tipo - especificado mas abajo
*/
export const insertTarea = async (nTarea) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (nTarea)
    {
        "nombre": "Ingreso",                //* nombre de la tarea
        "rol": "ADMIM",                     //* rol encargado de dicha tarea
    }
    **/

    try{
        const query = 'INSERT INTO tarea(tareaId, tareaNombre, tareaRol, tareaControla, tareaClave, tareaComentario) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?)';
        let params = [
            nTarea.nombre,
            nTarea.rol,
            nTarea.controla,
            nTarea.clave,
            nTarea.comentario
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Modifica una tarea
 *
 *i @param tareaM: objeto con los datos modificados del tipo evento - especificado mas abajo
*/
export const updateTarea = async (tareaM) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (tareaM)
    {
        "id": 1                             //* id de la tarea
        "nombre": "Ingreso",                //* nombre de la tarea
        "rol": "ADMIM",                     //* rol encargado de dicha tarea
    }
    **/

    try{
        // console.log(tareaM)
        const query = "UPDATE tarea SET tareaNombre = ?, tareaRol = ?, tareaControla = ?, tareaClave = ?, tareaComentario = ? WHERE tareaId = ?";
        let params = [
            tareaM.nombre,
            tareaM.rol,
            tareaM.controla,
            tareaM.clave,
            tareaM.comentario,
            tareaM.id
        ];
        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Elimina una tarea
 *
 *i @param tareaId: id del tipo evento a eliminar
*/
export const deleteTarea = async (tareaId) => {

    try{

        console.log("no implementado");

        // const query = "CALL delete_tipoEvento(?)";
        // let params = [
        //     tareaId
        // ]

        // const [rows] = await pool.query(query, params);
        // return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Busca todas las tareas asignadas a un rol
 *
 *i @param rol: id del evento a consultar
*/
export const getTareasRol = async (rol) => {

    try{
        let query = 'SELECT * FROM tarea WHERE tareaRol = ?';
        let params = [
            rol
        ];

        const [rows] = await pool.query(query, params);
        
        let response = [];
        rows.map( (row) => {
            response.push({
                "id": row.tareaId,
                "nombre": row.tareaNombre,
                "rol": row.tareaRol,
                "controla": row.tareaControla,
                "clave": row.tareaClave,
                "comentario": row.tareaComentario
            });
        });
        return response;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Busca todas las tareas que estan asignadas al evento
 *
 *i @param eventoId: id del evento a consultar
*/
export const getTareasEvento = async (eventoId) => {

    try{
        let query = 'SELECT t.tareaId, t.tareaNombre, t.tareaRol, et.etEvento, et.etEtapaRollback   \
                     FROM tarea AS t    \
                     INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId    \
                     WHERE et.etEvento = ? ORDER BY etEtapa';
        let params = [
            eventoId
        ];

        const [rows] = await pool.query(query, params);
        
        return rows;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Busca todas las tareas que NO estan asignadas al evento
 *
 *i @param eventoId: id del evento a consultar
*/
export const getTareasNoEvento = async (eventoId) => {

    try{
        let query = 'SELECT * FROM tarea AS t WHERE (SELECT count(et.etTarea) FROM evento_tarea AS et WHERE et.etEvento = ? AND et.etTarea = t.tareaId) = 0 ORDER BY t.tareaId';
        let params = [
            eventoId
        ];

        const [rows] = await pool.query(query, params);
        return rows;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Busca todas las tareas que NO estan asignadas al evento
 *
 *i @param eventoId: id del evento a consultar
*/
export const getTareaAccionCompleta = async (eventoId, accion) => {

    try{
        let query = 'SELECT * FROM gacieventos.audievento WHERE audiEEvento = ? AND audiEAccion = ?';
        let params = [
            eventoId,
            accion
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);
        // console.log(rows[0]!=undefined);
        return (rows[0]!=undefined);
    
    }catch (err){
        console.error(err);
        return 0;
    }
};
export const getComentarioTarea = async (eventoId, clave, etapa) => {

    try{

        /*
            SELECT * FROM gacieventos.audievento WHERE audiEEVento = "58ae366952ccff746c9814ee" AND audiEAccion = 'ESTIMAR';

            SELECT * FROM gacieventos.audievento WHERE audiEEVento = "58ae366952ccff746c9814ee" AND audiEEtapa = 5 AND audiEAccion = 'AVANZO';
        */

        let query = "";
        let params = [];
        if (clave){
            query = 'SELECT *, (SELECT eAdComentario FROM gacieventos.eventoadicion WHERE eAdId = ae.audiEAdi) AS comentario FROM audievento AS ae WHERE audiEEVento = ? AND audiEAccion = ?'
            params.push(eventoId),
            params.push(clave);
        }else{
            query = 'SELECT *, (SELECT eAdComentario FROM gacieventos.eventoadicion WHERE eAdId = ae.audiEAdi) AS comentario FROM audievento AS ae WHERE audiEEVento = ? AND audiEEtapa = ? AND audiEAccion = "AVANZO"'
            params.push(eventoId),
            params.push(etapa);
        }

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);
        // console.log(rows[0].comentario);

        const comentario = rows[0].comentario;

        return comentario;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};