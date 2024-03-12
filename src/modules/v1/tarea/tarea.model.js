import { pool } from '../../../db.js';


/**
 * Busca todas las tareas
 */
export const getTareas = async () => {
    try{
        let query = 'SELECT * FROM tarea ORDER BY tareaNombre';
        let params = [];
        const [rows] = await pool.query(query, params);
        let response = [];
        rows.map( (row) => {
            response.push(format(row));
        });

        return response;
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Busca una tarea en especifico
 * @param {string} tareaId - id de la tarea a consultar
 * @returns Tarea
 */
export const getTarea = async (tareaId) => {
    try{
        let query = 'SELECT * FROM tarea WHERE tareaId = ?';
        let params = [
            tareaId
        ];
        const [rows] = await pool.query(query, params);

        return format(rows[0]);    
    }catch (err){
        throw new Error(err);
    }
};

/**
 * 
 * @param {Object} tarea - Entidad tarea
 */
export const insertTarea = async (tarea) => {
    try {
        const query = 'INSERT INTO tarea(tareaId, tareaNombre, tareaRol, tareaControla, tareaClave, tareaComentario, tareaColor) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?, ?)';
        let params = [
            tarea.nombre,
            tarea.rol,
            tarea.controla,
            tarea.clave,
            tarea.comentario,
            tarea.color
        ];
        const [rows] = await pool.query(query, params);

        return tarea;
    }catch (err){
        throw new Error(err);
    }
}

/**
 * 
 * @param {Object} tarea - Entidad tarea
 */
export const updateTarea = async (tarea) => {
    try {
        // console.log(tareaM)
        const query = "UPDATE tarea SET tareaNombre = ?, tareaRol = ?, tareaControla = ?, tareaClave = ?, tareaComentario = ?, tareaColor = ? WHERE tareaId = ?";
        let params = [
            tarea.nombre,
            tarea.rol,
            tarea.controla,
            tarea.clave,
            tarea.comentario,
            tarea.color,
            tarea.id
        ];
        const [rows] = await pool.query(query, params);

        return tarea;
    }catch (err){
        throw new Error(err);
    }
}

/**
 * Eliminar una tarea
 * @param {string} tareaId - Id de la tarea a eliminar
 */
export const deleteTarea = async (tareaId) => {
    try{
        console.log("no implementado");
    }catch (err){
        throw new Error(err);
    }
}

/**
 * Busca las tareas por rol
 * @param {string} rol - rol a filtrar
 * @returns Tareas que puede hacer un rol
 */
export const getTareasRol = async (rol) => {
    try {
        let query = 'SELECT * FROM tarea WHERE tareaRol = ?';
        let params = [
            rol
        ];
        const [rows] = await pool.query(query, params);
        let response = [];
        rows.map( (row) => {
            response.push(format(row));
        });

        return response;
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Busca las tareas asignadas al tipo evento
 * @param {string} tipoEventoId - id del tipo evento buscar las tareas
 * @returns Todas las tareas de un tipo evento
 */
export const getTareasEvento = async (tipoEventoId) => {
    try {
        let query = 'SELECT t.tareaId, t.tareaNombre, t.tareaRol, et.etEvento, et.etEtapaRollback   \
                     FROM tarea AS t    \
                     INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId    \
                     WHERE et.etEvento = ? ORDER BY etEtapa';
        let params = [
            tipoEventoId
        ];
        const [rows] = await pool.query(query, params);
        let response = [];
        rows.map( (row) => {
            response.push(formatTipoEvento(row));
        });

        return response;
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Busca las tareas asignadas NO al tipo evento
 * @param {string} tipoEventoId - id del tipo evento
 * @returns Todas las tareas que no tenga un tipo evento
 */
export const getTareasNoEvento = async (eventoId) => {
    try {
        let query = 'SELECT * FROM tarea AS t WHERE (SELECT count(et.etTarea) FROM evento_tarea AS et WHERE et.etEvento = ? AND et.etTarea = t.tareaId) = 0 ORDER BY t.tareaId';
        let params = [
            eventoId
        ];
        const [rows] = await pool.query(query, params);
        let response = [];
        rows.map( (row) => {
            response.push(formatTipoEvento(row));
        });

        return response;
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Checkea si se cumplio una accion en un evento en x etapa 
 * @param {string} eventoId  - Id del evento
 * @param {string} accion - Clave de la acciona a consultar
 * @param {number} etapa - numero de etapa a consultar
 * @returns true -> si se cumplio la accion | false -> si no se cumplio la accion
 */
export const getTareaAccionCompleta = async (eventoId, accion, etapa) => {
    try {
        let query = 'SELECT count(*) as existe FROM gacieventos.audievento WHERE audiEEvento = ? AND audiEAccion = ? AND audiEEtapa = ?';
        let params = [
            eventoId,
            accion,
            etapa
        ];
        const [rows] = await pool.query(query, params);

        return (rows[0].existe > 0);
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Busca el comentario realizado en alguna accion o etapa
 * @param {string} eventoId - Id del evento
 * @param {string} clave - Clave de accion | si esta esta vacia solo consulta por la etapa
 * @param {number} etapa - Numero de Etapa
 */
export const getComentarioTarea = async (eventoId, clave, etapa) => {
    try {
        let query = "";
        let params = [];
        if (clave){
            // si se paso una clave
            query = 'SELECT *, (SELECT eAdComentario FROM gacieventos.eventoadicion WHERE eAdId = ae.audiEAdi) AS comentario FROM audievento AS ae WHERE audiEEVento = ? AND audiEAccion = ?'
            params.push(eventoId),
            params.push(clave);
        }else{
            // si no se le paso una clave, solo ve por etapa
            query = 'SELECT *, (SELECT eAdComentario FROM gacieventos.eventoadicion WHERE eAdId = ae.audiEAdi) AS comentario FROM audievento AS ae WHERE audiEEVento = ? AND audiEEtapa = ? AND audiEAccion = "AVANZO"'
            params.push(eventoId),
            params.push(etapa);
        }
        const [rows] = await pool.query(query, params);
        let comentario = "";
        if (rows[0].comentario) {
            comentario = rows[0].comentario;
        }

        return comentario;
    }catch (err){
        throw new Error(err);
    }
};

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} tarea - Entidad tarea
 * @returns Objeto tarea formateado
 */
function format(tarea){
    return {
        id: tarea.tareaId,
        nombre: tarea.tareaNombre,
        rol: tarea.tareaRol,
        controla: tarea.tareaControla,
        clave: tarea.tareaClave,
        comentario: tarea.tareaComentario,
        color: tarea.tareaColor
    }
}

/**
 * Formatea el objeto traido de la base de datos.
 * @param {Object} tarea - Entidad tarea
 * @returns Objeto tarea formateado
 */
function formatTipoEvento(tarea){
    return {
        id: tarea.tareaId,
        nombre: tarea.tareaNombre,
        rol: tarea.tareaRol,
        tipoEvento: tarea.etEvento,
        rollback: etEtapaRollback
    }
}