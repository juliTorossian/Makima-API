// TOOK VER TODOS LOS TIPO DE EVENTOS
// TOOK CREAR NUEVO TIPO DE EVENTO
// TOOK MODIFICAR UN TIPO DE EVENTO
// TOOK ELIMINAR UN TIPO DE EVENTO
// TODO VER UN TIPO DE EVENTO (?)

import { pool } from '../../db.js';


/** 
 ** Busca todos los tipos de eventos
 *
*/
export const getTipoEventos = async () => {

    try{
        let query = 'SELECT * FROM tipoevento WHERE tipoEventoActivo = true';
        let params = [];

        const [rows] = await pool.query(query, params);

        return rows;
    
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
    }
    **/

    try{
        const query = 'INSERT INTO tipoEvento(tipoEventoId, tipoEventoDesc, tipoEventoActivo) VALUES (?, ?, true)';
        let params = [
            nTipoEvento.id,
            nTipoEvento.descripcion
        ];

        const [rows] = await pool.query(query, params);
        // console.log(rows.affectedRows);
        return rows.affectedRows;

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
    }
    **/

    try{

        const query = "UPDATE tipoevento SET tipoEventoDesc = ? WHERE tipoEventoId = ?";
        let params = [
            tipoEventoM.descripcion,
            tipoEventoM.id
        ];
        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

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
        ]

        const [rows] = await pool.query(query, params);
        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}
