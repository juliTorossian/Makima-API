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

        const query = "SELECT * FROM registrohora ORDER BY regHoraFecha";
        let params = []

        const [rows] = await pool.query(query, params);
        // console.log(rows)

        let response = []

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [horas] = await pool.query("SELECT * FROM hora WHERE horaRegistro = ? ORDER BY horaInicio", [ row.regHoraId ]);

            let responseAux = {
                "id": row.regHoraId,
                "fecha": row.regHoraFecha,
                "usuario": row.regHoraUsuario,
                "totalHoras": 0,
                "horas": []
            }
            // horas.map( (hora) => {
            for (let j = 0; j < horas.length; j++) {
                const hora = horas[j];

                const [evento] = await pool.query("SELECT eventoId, eventoTipo, eventoNumero, eventoTitulo FROM evento WHERE eventoId = ?", [ hora.horaEvento ]);

                responseAux.horas.push({
                    "id": hora.horaId,
                    "evento": {
                        "id": hora.horaId,
                        "tipo": evento[0].eventoTipo,
                        "numero": evento[0].eventoNumero,
                        "titulo": evento[0].eventoTitulo
                    },
                    "inicio": hora.horaInicio,
                    "final": hora.horaFinal,
                    "total": parseFloat(hora.horaTotal),
                    "observaciones": hora.horaObs
                });
                responseAux.totalHoras += parseFloat(hora.horaTotal);
            }
            response.push(responseAux);
        }

        return response;

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

        const query = "SELECT * FROM registrohora WHERE regHoraUsuario = ? ORDER BY regHoraFecha";
        let params = [
            usuarioId
        ]

        const [rows] = await pool.query(query, params);

        let response = []

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [horas] = await pool.query("SELECT * FROM hora WHERE horaRegistro = ? ORDER BY horaInicio", [ row.regHoraId ]);

            let responseAux = {
                "id": row.regHoraId,
                "fecha": row.regHoraFecha,
                "usuario": row.regHoraUsuario,
                "totalHoras": 0,
                "horas": []
            }
            for (let j = 0; j < horas.length; j++) {
                const hora = horas[j];

                const [evento] = await pool.query("SELECT eventoId, eventoTipo, eventoNumero, eventoTitulo FROM evento WHERE eventoId = ?", [ hora.horaEvento ]);
                responseAux.horas.push({
                    "id": hora.horaId,
                    "evento": {
                        "id": hora.horaId,
                        "tipo": evento[0].eventoTipo,
                        "numero": evento[0].eventoNumero,
                        "titulo": evento[0].eventoTitulo
                    },
                    "inicio": hora.horaInicio,
                    "final": hora.horaFinal,
                    "total": parseFloat(hora.horaTotal),
                    "observaciones": hora.horaObs
                });
                responseAux.totalHoras += parseFloat(hora.horaTotal);
            }
            response.push(responseAux);
        }

        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

export const getHorasGenerales = async () => {

    try{

        // await pool.query("SET GLOBAL sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'")

        const query = "SELECT * FROM registrohora INNER JOIN usuario ON usuarioId = regHoraUsuario group by regHoraUsuario";
        let params = []

        const [rows] = await pool.query(query, params);
        // console.log(rows)

        /*
        {
            "id":
            "nombre":
            "apellido":
            "usuario":
            "registros": [
                "regId":
                "regFecha":
                "regTotal":
                "horas": [
                    "evento": {
                        "tipo": 
                        "numero": 
                    }
                    "inicio":
                    "final":
                    "total":
                    "obs":
                ]
            ]
        }
        */

        let response = []

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const registros = await getHorasUsuario(row.regHoraUsuario);

            let responseAux = {
                "id": row.regHoraUsuario,
                "nombre": row.usuarioNombre,
                "apellido": row.usuarioApellido,
                "usuario": row.usuarioUsuario,
                "registros": registros
            }
            response.push(responseAux);
        }

        return response;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Busca los registros de horas segun los filtros
 *
*/
export const getHorasEvento = async (eventoId) => {

    try{

        const query = " SELECT 	*   \
                        FROM registrohora   \
                        INNER JOIN hora ON horaRegistro = regHoraId \
                        WHERE horaEvento = ?   \
                        ORDER BY regHoraFecha, horaInicio";
        let params = [
            eventoId
        ]

        const [rows] = await pool.query(query, params);

        let response = []

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [horas] = await pool.query("SELECT * FROM hora WHERE horaRegistro = ? ORDER BY horaInicio", [ row.regHoraId ]);

            let responseAux = {
                "id": row.regHoraId,
                "fecha": row.regHoraFecha,
                "usuario": row.regHoraUsuario,
                "totalHoras": 0,
                "horas": []
            }
            for (let j = 0; j < horas.length; j++) {
                const hora = horas[j];

                const [evento] = await pool.query("SELECT eventoId, eventoTipo, eventoNumero, eventoTitulo FROM evento WHERE eventoId = ?", [ hora.horaEvento ]);
                responseAux.horas.push({
                    "id": hora.horaId,
                    "evento": {
                        "id": hora.horaId,
                        "tipo": evento[0].eventoTipo,
                        "numero": evento[0].eventoNumero,
                        "titulo": evento[0].eventoTitulo
                    },
                    "inicio": hora.horaInicio,
                    "final": hora.horaFinal,
                    "total": parseFloat(hora.horaTotal),
                    "observaciones": hora.horaObs
                });
                responseAux.totalHoras += parseFloat(hora.horaTotal);
            }
            response.push(responseAux);
        }

        return response;

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
        "horas": [
            {
                "evento": "idevento",   //* evento
                "final": "10:20",  //* inicio de registro
                "horaFin": "11:20",     //* fecha de registro
                "observaciones": "obs", //* observaciones de registro
                "total": 1     //* total horas
            }
        ]
    }
    **/

    try{
        // console.log(hora)
        const regHoraId = cadenaAleatoria(24);

        const query = "INSERT INTO registroHora(regHoraId, regHoraUsuario, regHoraFecha) VALUES (?, ?, ?)";
        let params = [
            regHoraId,
            hora.usuario,
            hora.fecha
        ];
        const [rows] = await pool.query(query, params);
        // console.log(rows);

        if (rows.affectedRows > 0){
            const queryHora = "INSERT INTO hora(horaId, horaRegistro, horaEvento, horaInicio, horaFinal, horaTotal, horaObs) VALUES ?"
            let paramsHora = [];
            hora.horas.map( (h) => {
                let aux = [cadenaAleatoria(24), regHoraId, h.evento.id, h.inicio, h.final, h.total, h.observaciones]
                paramsHora.push(aux)
            })

            const [rowsHora] = await pool.query(queryHora, [paramsHora]);
                // console.log(rowsHora);
        }

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
        "id": 
        "usuario": "idusuario",         //* usuario
        "fecha": "27-03-2023",          //* fecha de registro
        "horas": [
            {
                "id": 
                "evento": "idevento",   //* evento
                "final": "10:20",  //* inicio de registro
                "horaFin": "11:20",     //* fecha de registro
                "observaciones": "obs", //* observaciones de registro
                "total": 1     //* total horas
            }
        ]
    }
    **/

    try{

        // const query = "UPDATE hora SET horaInicio = ?, horaFinal = ?, horaFecha = ?, horaUsuario = ?, horaEvento = ?) WHERE horaUsuario = ?";
        const query = "UPDATE registroHora SET regHoraFecha = ?, regHoraUsuario = ? WHERE regHoraId = ?";
        let params = [
            hora.fecha,
            hora.usuario,
            hora.id
        ];
        const [rows] = await pool.query(query, params);
        // console.log(rows);

        const [del] = await pool.query("DELETE FROM hora WHERE horaRegistro = ?", [hora.id]);

        // if (rows.affectedRows > 0){
            const queryHora = "INSERT INTO hora(horaId, horaRegistro, horaEvento, horaInicio, horaFinal, horaTotal, horaObs) VALUES ?"
            let paramsHora = [];
            hora.horas.map( (h) => {
                let aux = [cadenaAleatoria(24), hora.id, h.evento.id, h.inicio, h.final, h.total, h.observaciones]
                paramsHora.push(aux)
            })

            const [rowsHora] = await pool.query(queryHora, [paramsHora]);
            // console.log(rowsHora);
        // }

        // hora.horas.map( (h) => {
        // for (let i = 0; i < hora.horas.length; i++) {
        //     const h = hora.horas[i];
            
        //     const queryHora = "UPDATE hora SET horaEvento = ?, horaInicio = ?, horaFinal = ?, horaTotal = ?, horaObs = ? WHERE horaId = ?"
        //     let paramsHora = [
        //         h.evento, 
        //         h.inicio, 
        //         h.final, 
        //         h.total, 
        //         h.observaciones,
        //         h.id 
        //     ];
        //     const [rowsHora] = await pool.query(queryHora, paramsHora);
        //     // console.log(rowsHora);
        // }
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
export const deleteHora = async (registroId) => {

    try{

        let query = "DELETE FROM hora WHERE horaRegistro = ?";
        let params = [
            registroId
        ];
        let [rows] = await pool.query(query, params);
        query = "DELETE FROM registroHora WHERE regHoraId = ?";
        params = [
            registroId
        ];
        [rows] = await pool.query(query, params);
        return 1;

    }catch (err) {
        console.error(err);
        return 0;
    }
}


const cadenaAleatoria = longitud => {
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};