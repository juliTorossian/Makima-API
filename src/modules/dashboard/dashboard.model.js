
import { pool } from '../../db.js';

/** 
 ** ultimos movimientos
 *
 *i @param cant: cantidad a consultar
*/
export const getUltimosMovimientos = async (cantidad) => {

    try{
        let params = [];
        let query = 'SELECT 	(SELECT CONCAT(eventoTipo, "-", eventoNumero) FROM evento WHERE eventoId = ae.audiEEvento) AS evento,   \
                                (SELECT tipoEventoColor FROM tipoEvento WHERE tipoEventoId = e.eventoTipo) AS eventoColor,  \
                                audiEEtapa, \
                                (SELECT t.tareaNombre FROM tarea AS t INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId WHERE et.etEvento = e.eventoTipo AND et.etEtapa = audiEEtapa) AS tarea,   \
                                audiEUsuario AS usuarioId ,   \
                                (SELECT usuarioUsuario FROM usuario WHERE usuarioId = ae.audiEUsuario) AS usuario,  \
                                (SELECT usuarioColor FROM usuario WHERE usuarioId = ae.audiEUsuario) AS usuarioColor,  \
                                audiEAccion,    \
                                ea.eAdComentario,   \
                                audiEFecha  \
                        FROM audievento AS ae   \
                        LEFT JOIN eventoadicion AS ea ON ea.eAdId = ae.audiEAdi \
                        INNER JOIN evento AS e ON e.eventoId = ae.audiEEvento   \
                        ORDER BY ae.audiEFecha DESC \
                        ';
        if (cantidad > 0){
            query += 'LIMIT ?';
            params = [
                parseInt(cantidad)
            ];
        }
        const [rows] = await pool.query(query, params);

        return rows;

    }catch (err){
        console.error(err);
        return 0;
    }
}