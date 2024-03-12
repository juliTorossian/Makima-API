import { pool } from '../../../db.js';

/** 
 ** Busca todos los tipos de eventos
 *
*/
export const getTipoEventos = async () => {
    try{
        let query = 'SELECT * FROM tipoevento WHERE tipoEventoActivo = true';
        let params = [];
        const [rows] = await pool.query(query, params);
        
        let response = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const [tareas] = await pool.query("SELECT * FROM gacieventos.evento_tarea WHERE etEvento = ? ORDER BY etEtapa", [row.tipoEventoId]);

            let responseAux = {
                "id": row.tipoEventoId,
                "descripcion": row.tipoEventoDesc,
                "activo": row.tipoEventoActivo,
                "color": row.tipoEventoColor,
                "propio": row.tipoEventoPropio,
                "tareas": []
            };
            tareas.map( (tarea) => {
                responseAux.tareas.push({
                    "etapa": tarea.etEtapa,
                    "tarea": tarea.etTarea,
                    "rollback": tarea.etEtapaRollback
                })
            })
            response.push(responseAux);
        };
        return response;
    }catch (err){
        throw new Error(err);
    }
};

/** 
 ** Busca un tipo de evento
 *
 * @param {string} id - id del tipo de evento
 * @param {boolean} cerrados - trae tipoeventos cerrados
*/
export const getTipoEvento = async (id, cerrados=true) => {

    try{
        let query = "";
        if (cerrados){
            query = 'SELECT * FROM tipoevento WHERE tipoEventoId = ?';
        }else{
            query = 'SELECT * FROM tipoevento WHERE tipoEventoActivo = true AND tipoEventoId = ?';
        }
        let params = [
            id
        ];

        const [rows] = await pool.query(query, params);
        const [tareas] = await pool.query("SELECT * FROM evento_tarea WHERE etEvento = ?", [id]);
        let response = {
            "id": rows[0].tipoEventoId,
            "descripcion": rows[0].tipoEventoDesc,
            "activo": rows[0].tipoEventoActivo,
            "color": rows[0].tipoEventoColor,
            "propio": rows[0].tipoEventoPropio,
            "tareas": []
        };

        tareas.map( (tarea) => {
            response.tareas.push({
                "etapa": tarea.etEtapa,
                "tarea": tarea.etTarea,
                "rollback": tarea.etEtapaRollback
            })
        })
        return response;
    }catch (err){
        throw new Error(err);
    }
};

/** 
 ** Crea un nuevo tipo de evento
 *
 * @param {object} tipoEvento: objeto con los datos necesarios del tipo
*/
export const insertTipoEvento = async (tipoEvento) => {
    try{
        const query = 'INSERT INTO tipoEvento(tipoEventoId, tipoEventoDesc, tipoEventoColor, tipoEventoPropio, tipoEventoActivo) VALUES (?, ?, ?, ?, true)';
        let params = [
            tipoEvento.id,
            tipoEvento.descripcion,
            tipoEvento.color,
            (tipoEvento.propio) ? true : false
        ];
        const [rows] = await pool.query(query, params);
        if (rows.affectedRows){
            let tareas = {
                "tipoEvento": tipoEvento.id,
                "tareas": []
            }

            tipoEvento.tareas.map( (tarea) => {
                tareas.tareas.push({
                    "id": tarea.tarea,
                    "orden": tarea.etapa,
                    "rollback": tarea.rollback
                });
            })
            asignarTareas(tareas);
        }
        return tipoEvento;
    }catch (err){
        throw new Error(err);
    }
}

/** 
 ** Modifica un evento
 *
 * @param tipoEvento: objeto con los datos modificados del tipo evento
*/
export const updateTipoEvento = async (tipoEvento) => {
    try{
        const query = "UPDATE tipoevento SET tipoEventoDesc = ?, tipoEventoPropio = ?, tipoEventoColor = ? WHERE tipoEventoId = ?";
        let params = [
            tipoEvento.descripcion,
            tipoEvento.propio,
            tipoEvento.color,
            tipoEvento.id
        ];
        const [rows] = await pool.query(query, params);
        if (rows.affectedRows){
            let tareas = {
                "tipoEvento": tipoEvento.id,
                "tareas": []
            }
            tipoEvento.tareas.map( (tarea) => {
                tareas.tareas.push({
                    "id": tarea.tarea,
                    "orden": tarea.etapa,
                    "rollback": tarea.rollback
                });
            })
            asignarTareas(tareas);
        }
        return tipoEvento;
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Elimina un tipo evento
 *i En el caso que el tipo de evento ya tenga un evento asignado realiza un soft delete
 *
 * @param {string} tipoEventoId: id del tipo evento a eliminar
*/
export const deleteTipoEvento = async (tipoEventoId) => {
    try{
        const query = "CALL delete_tipoEvento(?)";
        let params = [
            tipoEventoId
        ];
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Asignar tareas en orden
 *
 * @param {object[]} tareas: lista de las tareas a agregar con su orden
*/
export const asignarTareas = async (tareas) => {
    try{
        let params = [];
        const query = "INSERT INTO evento_tarea(etEvento, etTarea, etEtapa, etEtapaRollback) VALUES ?";
        tareas.tareas.forEach(tarea => {
            let aux = [tareas.tipoEvento, tarea.id, tarea.orden, tarea.rollback]
            params.push(aux)
        });

        // limpio evento_tarea
        let ok = await limpiarTareasTipoEvento(tareas.tipoEvento);
        if (!(ok < 0) && (params.length > 0)){
            const [rows] = await pool.query(query, [params]);
            return rows.affectedRows;
        }else{
            console.error("Error al limpiar evento_tarea");
            return 0;
        }
    }catch (err){
        throw new Error(err);
    }

}

/** 
 ** Busca todos los tipos de eventos para el dashboard
 *
*/
export const getTipoEventosDashboard = async () => {
    try{
        let query = 'SELECT *,  \
                            (SELECT getCantEventosxTipoEvento(tipoEventoId)) AS cantidad \
                     FROM tipoevento \
                     WHERE  tipoEventoActivo = true AND \
                            tipoEventoPropio = 0 AND   \
                            (SELECT getCantEventosxTipoEvento(tipoEventoId)) > 0\
                     ';
        let params = [];
        const [rows] = await pool.query(query, params);
        return rows;
    }catch (err){
        throw new Error(err);
    }
};


//*     MISSELANEOUS

const limpiarTareasTipoEvento = async (tipoEvento) => {
    try{
        const query = "DELETE FROM evento_tarea WHERE etEvento = ?";
        let params = [
            tipoEvento
        ];
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err){
        throw new Error(err);
    }

}
