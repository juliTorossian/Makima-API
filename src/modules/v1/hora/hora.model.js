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
        throw new Error(err);
    }
}

/** 
 ** Busca los registros de horas segun los filtros
 *
 * @param {string} usuarioId - id del usuario
*/
export const getHorasUsuario = async (usuarioId) => {
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
                        "id": evento[0].eventoId,
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
        throw new Error(err);
    }
}

export const getHorasGenerales = async () => {
    try{
        await pool.query("SET GLOBAL sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'")
        await pool.query("SET sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'")

        const query = "SELECT * FROM registrohora INNER JOIN usuario ON usuarioId = regHoraUsuario group by regHoraUsuario";
        let params = []
        const [rows] = await pool.query(query, params);
        let response = []

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const registros = await getHorasUsuario(row.regHoraUsuario);
            let responseAux = {
                "id": row.regHoraUsuario,
                "nombre": row.usuarioNombre,
                "apellido": row.usuarioApellido,
                "usuario": row.usuarioUsuario,
                "promedioMes": await getPromedioHorasMesUsuario(row.regHoraUsuario),
                "registros": registros
            }
            response.push(responseAux);
        }
        return response;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Busca los registros de horas segun los filtros
 *
 * @param {string} eventoId - id del evento
*/
export const getHorasEvento = async (eventoId) => {
    try{
        const query = " SELECT  *   \
                        FROM hora AS h   \
                        INNER JOIN registroHora AS r ON horaRegistro = regHoraId   \
                        WHERE horaEvento = ?   \
                        ORDER BY regHoraFecha, horaInicio"
        let params = [
            eventoId
        ]
        const [rows] = await pool.query(query, params);
        let response = []
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const [ u ] = await pool.query("SELECT * FROM usuario WHERE usuarioId = ?", [ row.regHoraUsuario ]);
            const usuario = {
                id: u[0].usuarioId,
                nombre: u[0].usuarioNombre,
                apellido: u[0].usuarioApellido,
                color: u[0].usuarioColor,
                usuario: u[0].usuarioUsuario
            }
            const [evento] = await pool.query("SELECT eventoId, eventoTipo, eventoNumero, eventoTitulo FROM evento WHERE eventoId = ?", [ row.horaEvento ]);

            let responseAux = {
                "registroId": row.regHoraId,
                "fecha": row.regHoraFecha,
                "usuario": usuario,
                "horaId": row.horaId,
                "evento": {
                    "id": row.horaId,
                    "tipo": evento[0].eventoTipo,
                    "numero": evento[0].eventoNumero,
                    "titulo": evento[0].eventoTitulo
                },
                "inicio": row.horaInicio,
                "final": row.horaFinal,
                "total": parseFloat(row.horaTotal),
                "observaciones": row.horaObs
            }
            response.push(responseAux);
        }
        return response;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Busca un registro de hora
 *
 * @param {string} horaid: id de la hora
*/
export const getHora = async (horaId) => {
    try{
        const query = "SELECT * FROM hora WHERE horaId = ?";
        let params = [horaId]
        const [rows] = await pool.query(query, params);
        return rows[0];
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Crea un nuevo registro de hora
 *
 * @param {object} hora: objeto con los datos necesarios de la hora
*/
export const insertHora = async (hora) => {
    try{
        const regHoraId = crypto.randomUUID();
        const query = "INSERT INTO registroHora(regHoraId, regHoraUsuario, regHoraFecha) VALUES (?, ?, ?)";
        let params = [
            regHoraId,
            hora.usuario,
            hora.fecha
        ];
        const [rows] = await pool.query(query, params);
        if (rows.affectedRows > 0){
            const queryHora = "INSERT INTO hora(horaId, horaRegistro, horaEvento, horaInicio, horaFinal, horaTotal, horaObs) VALUES ?"
            let paramsHora = [];
            hora.horas.map( (h) => {
                let aux = [crypto.randomUUID(), regHoraId, h.evento.id, h.inicio, h.final, h.total, h.observaciones]
                paramsHora.push(aux)
            });
            const [rowsHora] = await pool.query(queryHora, [paramsHora]);
        }
        return { id:regHoraId, ...hora };
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Modifica un registro de hora
 *
 * @param {object} hora: objeto con los datos modificados de la hora
*/
export const updateHora = async (hora) => {
    try{
        const query = "UPDATE registroHora SET regHoraFecha = ?, regHoraUsuario = ? WHERE regHoraId = ?";
        let params = [
            hora.fecha,
            hora.usuario,
            hora.id
        ];
        const [rows] = await pool.query(query, params);
        const [del] = await pool.query("DELETE FROM hora WHERE horaRegistro = ?", [hora.id]);

        const queryHora = "INSERT INTO hora(horaId, horaRegistro, horaEvento, horaInicio, horaFinal, horaTotal, horaObs) VALUES ?"
        let paramsHora = [];
        hora.horas.map( (h) => {
            let aux = [crypto.randomUUID(), hora.id, h.evento.id, h.inicio, h.final, h.total, h.observaciones]
            paramsHora.push(aux)
        })
        const [rowsHora] = await pool.query(queryHora, [paramsHora]);
        return hora;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Eliminar un registro de hora
 *
 * @param {string} horaId: id de la hora a eliminar
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
        throw new Error(err);
    }
}

export const getPromedioHorasMesUsuario = async (usuarioId) => {
    try{
        let suma = 0;
        let horas = [];
        horas = await getHorasMesUsuario(usuarioId);

        horas.forEach( (h) => {suma += h});
        const promedio = suma / horas.length;
        return promedio;
    }catch (err) {
        throw new Error(err);
    }
}

export const getHorasMesUsuario = async (usuarioId) => {
    try{
        let query = "SELECT SUM(h.horaTotal) AS totalMes    \
                     FROM registrohora AS rh \
                     INNER JOIN hora AS h ON h.horaRegistro = rh.regHoraId   \
                     WHERE rh.regHoraUsuario = ?    \
                     GROUP BY MONTH(rh.regHoraFecha), YEAR(rh.regHoraFecha)";

        let params = [
            usuarioId
        ];
        let [rows] = await pool.query(query, params);
        let horas = []
        rows.map( (h) => {horas.push(parseInt(h.totalMes))});
        return horas;
    }catch (err) {
        throw new Error(err);
    }
}