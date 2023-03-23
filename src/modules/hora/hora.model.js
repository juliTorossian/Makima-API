// TODO VER HORAS CON FILTROS
// TODO CARGAR HORA
// TODO MODIFICAR HORA
// TODO ELIMINAR HORA

import { pool } from '../../db.js';

/** 
 ** Busca los registros de horas segun los filtros
 *
*/
export const getHoras = async () => {

    try{

        const query = "SELECT * FROM hora";
        let params = []

        const [rows] = await pool.query(query, params);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca un registro de hora
 *
 *i @param horaid: id de la hora
*/
export const getHora = async (horaId) => {

    try{

        const query = "SELECT * FROM hora WHERE horaId = ?";
        let params = [horaId]

        const [rows] = await pool.query(query, params);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo registro de hora
 *
 *i @param hora: objeto con los datos necesarios de la hora - especificado mas abajo
*/
export const insertHora = async (hora) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "inicio": "12:00",         //* inicio de registro
        "final": "14:00",          //* final de registro
        "fecha": "2023-03-23",     //* fecha de registro
        "usuario": "idusuario",    //* usuario
        "evento": "idevento"       //* evento
    }
    **/

    try{

        const query = "INSERT INTO hora(horaId, horaInicio, horaFinal, horaFecha, horaUsuario, horaEvento) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?)";
        let params = [
            hora.inicio,
            hora.final,
            hora.fecha,
            hora.usuario,
            hora.evento
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return 1;

    }catch (err) {
        console.error(err);
        return 0;
    }
}

/** 
 ** Modifica un registro de hora
 *
 *i @param hora: objeto con los datos modificados de la hora - especificado mas abajo
*/
export const updateHora = async (hora) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "inicio": "12:00",         //* inicio de registro
        "final": "14:00",          //* final de registro
        "fecha": "2023-03-23",     //* fecha de registro
        "usuario": "idusuario",    //* usuario
        "evento": "idevento"       //* evento
    }
    **/

    try{

        const query = "UPDATE hora SET horaInicio = ?, horaFinal = ?, horaFecha = ?, horaUsuario = ?, horaEvento = ?) WHERE horaUsuario = ?";
        let params = [
            hora.inicio,
            hora.final,
            hora.fecha,
            hora.usuario,
            hora.evento,
            hora.id
        ];

        const [rows] = await pool.query(query, params);
        return 1;

    }catch (err) {
        console.error(err);
        return 0;
    }
}

/** 
 ** Eliminar un registro de hora
 *
 *i @param horaId: id de la hora a eliminar
*/
export const deleteHora = async (horaId) => {

    try{

        const query = "DELETE FROM hora WHERE horaId = ?";
        let params = [
            horaId
        ];

        const [rows] = await pool.query(query, params);
        return 1;

    }catch (err) {
        console.error(err);
        return 0;
    }
}