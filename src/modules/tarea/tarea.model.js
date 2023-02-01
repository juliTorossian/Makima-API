// TODO VER TODAS LAS TAREAS
// TODO CREAR NUEVA TAREA
// TODO MODIFICAR UNA TAREA
// TODO ELIMINAR UNA TAREA
// TODO VER TAREAS NO ASIGNADAS A UN TIPO EVENTO

import { pool } from '../../db.js';


/** 
 ** Busca todas las tareas
 *
*/
export const getTareas = async () => {

    try{
        let query = 'SELECT * FROM tarea';
        let params = [];

        const [rows] = await pool.query(query, params);

        return rows;
    
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
        const query = 'INSERT INTO tarea(tareaId, tareaNombre, tareaRol) VALUES ((SELECT getNewId()), ?, ?)';
        let params = [
            nTarea.nombre,
            nTarea.rol
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

        const query = "UPDATE tarea SET tareaNombre = ?, tareaRol = ? WHERE tareaId = ?";
        let params = [
            tareaM.nombre,
            tareaM.rol,
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
        return rows;
    
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
        let query = 'SELECT t.tareaId, t.tareaNombre, t.tareaRol, et.etEvento FROM tarea AS t INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId WHERE et.etEvento = ?';
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