// TOOK VER TODOS LOS TIPO DE EVENTOS
// TOOK CREAR NUEVO TIPO DE EVENTO
// TOOK MODIFICAR UN TIPO DE EVENTO
// TOOK ELIMINAR UN TIPO DE EVENTO
// TODO VER UN TIPO DE EVENTO (?)

// TOOK PODER ASIGNAR TAREAS EN UN ORDEN
// TOOK PODER MODIFICAR ESE ORDEN


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
        /*
        {
            "tipoEventoId": "CAS",
            "tipoEventoDesc": "Arreglos",
            "tipoEventoActivo": 1,
            "tipoEventoColor": "#fb8b9f",
            "tipoEventoPropio": 0
        }
        */

        // console.log("rows")
        // console.log(rows);

        let response = [];
        // rows.map(  (row) => {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            // console.log("row")
            // console.log(row);

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
            // console.log(responseAux);
            response.push(responseAux);
        };
        return response;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};
/** 
 ** Busca todos los tipos de eventos
 *
*/
export const getTipoEvento = async (id, cerrados) => {

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
        console.error(err);
        return 0;
    }
};

/** 
 ** Crea un nuevo tipo de evento
 *
 *i @param nTipoEvento: objeto con los datos necesarios del tipo - especificado mas abajo
*/
export const insertTipoEvento = async (nTipoEvento) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (nTipoEvento)
    {
        "id": "CUS",                        //* tipo de evento
        "descripcion": "CUSTOM",            //* descripcion del tipo
        "color": "#000000",                 //* color en hexa
        "propio": true,                      //* evento propio
        "tareas": {
            "etapa": ,
            "tarea": ,
            "rollback"
        }
    }
    **/

    try{
        const query = 'INSERT INTO tipoEvento(tipoEventoId, tipoEventoDesc, tipoEventoColor, tipoEventoPropio, tipoEventoActivo) VALUES (?, ?, ?, ?, true)';
        let params = [
            nTipoEvento.id,
            nTipoEvento.descripcion,
            nTipoEvento.color,
            (nTipoEvento.propio) ? true : false
        ];

        const [rows] = await pool.query(query, params);
        // console.log(rows.affectedRows);
        if (rows.affectedRows){
            // "tareas": [
            //     {
            //     "id": 1,                    //* id de la tarea
            //     "orden": 1,                  //* orden de la tarea
            //     "rollback": 1               //* etapa de rollback
            //     }
            // ]
            let tareas = {
                "tipoEvento": nTipoEvento.id,
                "tareas": []
            }

            nTipoEvento.tareas.map( (tarea) => {
                tareas.tareas.push({
                    "id": tarea.tarea,
                    "orden": tarea.etapa,
                    "rollback": tarea.rollback
                });
            })

            // console.log(tareas);
            asignarTareas(tareas);
        }

        return 1

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Modifica un evento
 *
 *i @param tipoEventoM: objeto con los datos modificados del tipo evento - especificado mas abajo
*/
export const updateTipoEvento = async (tipoEventoM) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (tipoEventoM)
    {
        "id": "CUS",                        //* tipo de evento
        "descripcion": "CUSTOM",            //* descripcion del tipo
        "color": "#000000",                 //* color en hexa
        "propio": true                      //* evento propio
    }
    **/

    try{

        const query = "UPDATE tipoevento SET tipoEventoDesc = ?, tipoEventoPropio = ?, tipoEventoColor = ? WHERE tipoEventoId = ?";
        let params = [
            tipoEventoM.descripcion,
            tipoEventoM.propio,
            tipoEventoM.color,
            tipoEventoM.id
        ];
        const [rows] = await pool.query(query, params);
        if (rows.affectedRows){
            let tareas = {
                "tipoEvento": tipoEventoM.id,
                "tareas": []
            }

            tipoEventoM.tareas.map( (tarea) => {
                tareas.tareas.push({
                    "id": tarea.tarea,
                    "orden": tarea.etapa,
                    "rollback": tarea.rollback
                });
            })

            // console.log(tareas);
            asignarTareas(tareas);
        }

        return 1

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Elimina un tipo evento
 *i En el caso que el tipo de evento ya tenga un evento asignado realiza un soft delete
 *
 *i @param tipoEventoId: id del tipo evento a eliminar
*/
export const deleteTipoEvento = async (tipoEventoId) => {

    try{
        const query = "CALL delete_tipoEvento(?)";
        let params = [
            tipoEventoId
        ];

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Asignar tareas en orden
 *
 *i @param tareas: lista de las tareas a agregar con su orden
*/
export const asignarTareas = async (tareas) => {

    /** 
    * i Objeto que tiene que llegar por parametro (tareas)
    [
        {
            "tipoEvento": "CUS",            //* tipo de evento
            "tareas": [
                {
                "id": 1,                    //* id de la tarea
                "orden": 1,                  //* orden de la tarea
                "rollback": 1               //* etapa de rollback
                },
                {
                "id": 3,                    //* id de la tarea
                "orden": 2,                  //* orden de la tarea
                "rollback": 1               //* etapa de rollback
                }
            ]
        }
    ]
    **/
   
    try{

        // console.log(tareas);
        // console.log("");
        // console.log(tareas.tareas);

        let params = [];
        const query = "INSERT INTO evento_tarea(etEvento, etTarea, etEtapa, etEtapaRollback) VALUES ?";
        tareas.tareas.forEach(tarea => {
            let aux = [tareas.tipoEvento, tarea.id, tarea.orden, tarea.rollback]
            params.push(aux)
        });

        // limpio evento_tarea
        let ok = await limpiarTareasTipoEvento(tareas.tipoEvento);

        // console.log(ok);

        if (!(ok < 0) && (params.length > 0)){
            const [rows] = await pool.query(query, [params]);
            return rows.affectedRows;
        }else{
            console.error("Error al limpiar evento_tarea");
            return 0;
        }


    }catch (err){
        console.error(err);
        return 0;
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
        console.error(err);
        return 0;
    }
};


//*     MISSELANEOUS

const limpiarTareasTipoEvento = async (tipoEvento) => {
    let ok = 0;
    try{
        const query = "DELETE FROM evento_tarea WHERE etEvento = ?";
        let params = [
            tipoEvento
        ];

        const [rows] = await pool.query(query, params);
        // console.log(rows);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return -1;
    }

}
