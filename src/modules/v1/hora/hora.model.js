// TODO VER HORAS CON FILTROS
// TODO CARGAR HORA
// TODO MODIFICAR HORA
// TODO ELIMINAR HORA

import { pool } from '../../../db.js';

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
 ** Busca los registros de horas segun los filtros
 *
*/
export const getHorasUsuario = async (usuarioId) => {

/** 
    * i Objeto que tiene que llegar por parametro
    {
        "usuario": "idusuario",         //* usuario
        "fecha": "27-03-2023",          //* fecha de registro
        "hora": [
            {
                "evento": "idevento",   //* evento
                "horaInicio": "10:20",  //* inicio de registro
                "horaFin": "11:20",     //* fecha de registro
                "observaciones": "obs", //* observaciones de registro
                "totalTrabajado": 1     //* total horas
            }
        ]
    }
    **/

    try{
    
        let retorno = [];

        const query = "SELECT horaFecha     \
                        FROM hora   \
                        WHERE horaUsuario = ?   \
                        GROUP BY horaFecha";
        let params = [
            usuarioId
        ]

        const [rows] = await pool.query(query, params);

        console.log(rows);

        for (const fecha of rows) {

            let fechaLarga = new Date(fecha.horaFecha);
            let fechaCorta = fechaLarga.toISOString().substring(0, 10);
            // console.log(fechaCorta); // imprime "2023-03-27"

            let retornoAux = {
                "usuario": usuarioId,
                "fecha": fechaCorta,
                "hora": []
            }


            const queryB = 'SELECT *    \
                            FROM hora   \
                            WHERE horaUsuario = ?   \
                            AND   horaFecha = ?';
            let paramsB = [
                usuarioId,
                fecha.horaFecha
            ]

            const [rowsB] = await pool.query(queryB, paramsB);

            // console.log(rowsB);

            rowsB.map( (hora) => {
                retornoAux.hora.push({
                    "id": hora.horaId,
                    "Evento": hora.horaEvento,
                    "horaInicio": hora.horaInicio,
                    "horaFin": hora.horaFinal,
                    "observaciones": hora.horaObs
                });
            });

            retorno.push(retornoAux);
        }

        // console.log(retorno);

        return retorno;

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
        "usuario": "idusuario",         //* usuario
        "fecha": "27-03-2023",          //* fecha de registro
        "hora": [
            {
                "evento": "idevento",   //* evento
                "horaInicio": "10:20",  //* inicio de registro
                "horaFin": "11:20",     //* fecha de registro
                "observaciones": "obs", //* observaciones de registro
                "totalTrabajado": 1     //* total horas
            }
        ]
    }
    **/

    try{

        // const query = "INSERT INTO hora(horaId, horaInicio, horaFinal, horaFecha, horaUsuario, horaEvento) VALUES ((SELECT getNewId()), ?, ?, ?, ?, ?)";
        // let params = [
        //     hora.inicio,
        //     hora.final,
        //     hora.fecha,
        //     hora.usuario,
        //     hora.evento
        // ];

        const query = "INSERT INTO hora(horaId, horaInicio, horaFinal, horaFecha, horaUsuario, horaEvento, horaObs) VALUES ?";
        let params = [];
        hora.hora.forEach(h => {
            let aux = [cadenaAleatoria(24), h.horaInicio, h.horaFin, hora.fecha, hora.usuario, h.evento, h.observaciones]
            params.push(aux)
        });

        console.log(query);
        console.log(params);

        const [rows] = await pool.query(query, [params]);

        console.log(rows);

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


const cadenaAleatoria = longitud => {
    // Nota: no uses esta función para cosas criptográficamente seguras. 
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        // Lee más sobre la elección del índice aleatorio en:
        // https://parzibyte.me/blog/2021/11/30/elemento-aleatorio-arreglo-javascript/
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};