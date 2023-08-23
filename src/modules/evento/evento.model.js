//TOOK VER TODOS LOS EVENTOS
//TOOK CREAR NUEVOS EVENTOS
//TOOK MODIFICAR EVENTOS
//TOOK ELIMINAR EVENTOS
//TOOK VER UN EVENTO
//TOOK VER LOS EVENTOS DE UN USUARIO
//TOOK VER LOS EVENTOS POR ROL DE USUARIO
//TOOK AVANZAR O RETROCEDER ETAPA DEL EVENTO
//TOOK REASIGNAR EVENTO
//TOOK ESTIMAR EVENTO

import { pool } from '../../db.js';


/** 
 ** Busca todos los eventos abiertos en la base de datos
 *
 *i @param page: nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
*/
export const getEventos = async (page) => {

    try{
        const totalRows = 5;
        page = parseInt(page);

        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos(?,?,?)';

        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);

        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
        }

        const [ total ] = await pool.query("SELECT count(eventoId) as 'total' FROM evento");
        const totalPages = Math.ceil(total[0].total / totalRows);

        const [rows] = await pool.query(query, params);

        const results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results":rows[0]
        };

        return results;
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Busca todos los eventos abiertos que le corresponden a un usuario
 *
 *i @param page: nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
 *i        usuario: id de usuario con el cual se realiza el filtro
*/
export const getEventosUsuario = async (page, usuario) => {
    try{
        const totalRows = 5;
        page = parseInt(page);

        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos_usuario(?, ?, ?, ?)';

        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);
            params.push(usuario);
        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
            params.push(usuario);
        }

        const [ total ] = await pool.query("SELECT COUNT(e.eventoId) as 'total' FROM audiEvento AS auE INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento WHERE auE.audiEEtapa = e.eventoEtapa AND auE.audiEUsuario = " +usuario);
        const totalPages = Math.ceil(total[0].total / totalRows);

        const [rows] = await pool.query(query, params);

        const results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results":rows[0]
        };

        return results;
    
    }catch (err){
        console.error(err);
        return null;
    }
};

/** 
 ** Busca todos los eventos abiertos pertenecientes a un rol
 *
 *i @param page: nuemero de pagina - en el caso de ser 0 o undefined se retornaran todos los eventos
 *i        rol:  codigo de rol con el cual se realiza el filtro
*/
export const getEventosRol = async (page, rol) => {
    try{
        const totalRows = 5;
        page = parseInt(page);

        let paginacion = false;
        let params = [];

        let query = 'CALL select_eventos_rol(?, ?, ?, ?)';

        if (page > 0){
            paginacion = true;

            params.push(paginacion);
            params.push(page);
            params.push(totalRows);
            params.push(rol);

        }else{
            params.push(paginacion);
            params.push(0);
            params.push(0);
            params.push(rol);
        }
        
        const [ total ] = await pool.query("SELECT COUNT(e.eventoId) as 'total' FROM audiEvento AS auE INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario WHERE auE.audiEEtapa = e.eventoEtapa AND usu.usuarioRol = '" +rol.toUpperCase() +"'");
        const totalPages = Math.ceil(total[0].total / totalRows);

        const [rows] = await pool.query(query, params);

        const results = {
            "info": {
                "total": total[0].total,
                "totalPages": (paginacion ? totalPages : 1 ),
                "next": (page >= totalPages ? null : (page + 1)),
                "prev": (page <= 1 ? null : (page - 1))
            },
            "results":rows[0]
        };

        return results;
    
    }catch (err){
        console.error(err);
        return null;
    }
};

/** 
 ** Busca un evento en especifico
 *
 *i @param eventoId: id del evento a buscar
*/
export const getEvento = async (eventoId) => {

    try{
        const query = "SELECT 	e.eventoId,                                                                                                     \
                            e.eventoTipo,                                                                                                   \
                            e.eventoNumero,                                                                                                 \
                            e.eventoTitulo,                                                                                                 \
                            ta.tareaNombre,                                                                                                 \
                            (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',                    \
                            (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',               \
                            (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'        \
                    FROM evento as e                                                                                                        \
                    INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo                                                           \
                    INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea                                                                      \
                    WHERE	e.eventoEtapa = tet.etEtapa                                                                                     \
                    AND     e.eventoCerrado = false                                                                                         \
                    AND 	e.eventoId = ?                                                                                                 \
                    "
        const params = [eventoId]

        const [rows] = await pool.query(query, params);

        return rows[0];
    }catch (err){
        console.error(err);
        return null;
    }


};

/** 
 ** Crea un nuevo evento
 *
 *i @param nEvento: objeto con los datos necesarios del evento - especificado mas abajo
*/
export const insertEvento = async (nEvento) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (nEvento)
    * ! no espera este att
    {
        "tipo": "CUS",                          //* tipo de evento
        "numero": "??",                         //! numeto de Evento
        "titulo": "Titulo del nuevo evento",    //* titulo del evento
        "cerrado": 0                            //! siempre es false
        "etapa": 1                              //! siempre nace en 1
        "cliente": 2,                           //* id del cliente
        "producto": 2,                          //* id del programa
        "usuAlta": 1                            //* id del usuario de alta
        "fechaAlta": now()                      //! fecha del momento
    }
    **/

    try{
        const query = "CALL insert_eventos(?,?,?,?,?)";
        let params = [
            nEvento.tipo,
            nEvento.titulo,
            nEvento.cliente,
            nEvento.producto,
            nEvento.usuAlta
        ]

        const [rows] = await pool.query(query, params);

        console.log(rows.affectedRows);

        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Modifica un evento
 *
 *i @param eventoM: objeto con los datos modificados del evento - especificado mas abajo
*/
export const updateEvento = async (eventoM) => {
     
    /** 
    * i Objeto que tiene que llegar por parametro (eventoM)
    * ! no espera este att
    {
        "id": 1                                 //* id del evento
        "titulo": "Titulo del nuevo evento",    //* titulo del evento
        "cliente": 2,                           //* id del cliente
        "producto": 2,                          //* id del programa
    }
    **/

    try{

        //i CALL update_eventos(30, "Titulo actualizado", 1, 1)

        const query = "CALL update_eventos(?,?,?,?)";
        let params = [
            eventoM.id,
            eventoM.titulo,
            eventoM.cliente,
            eventoM.producto
        ]

        const [rows] = await pool.query(query, params);

        console.log(rows);
        console.log(rows.affectedRows);

        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Elimina un evento
 *
 *i @param eventoId: id del evento a eliminar - soft delete
*/
export const deleteEvento = async (eventoId) => {

    try{

        //i CALL delete_eventos(30);

        const query = "CALL delete_eventos(?)";
        let params = [
            eventoId
        ]

        const [rows] = await pool.query(query, params);

        console.log(rows.affectedRows);

        return rows.affectedRows;

    }catch (err){
        console.error(err);
        return 0;
    }

}

/** 
 ** Avanza la etapa de un evento
 *
 *i @param eventoId:        id del evento a avanzar
 *i        usuarioAsignado: id del usuario que se asigna en la nueva etapa
*/
export const avanzarEvento = async (eventoId, usuarioAsignado) => {

    try{
        const datosEvento = await getDatosEvento(eventoId);

        let [ nEtapa ] = await pool.query("SELECT getEtapaSig_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
        nEtapa = nEtapa[0];

        let query = 'CALL circular_evento(?, ?, ?)';
        let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado];

        const [rows] = await pool.query(query, params);

        return rows.affectedRows
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Retrocede la etapa de un evento
 *
 *i @param eventoId:        id del evento a retroceder
 *i        usuarioAsigando: id del usuario que se asigna en la nueva etapa
*/
export const retrocederEvento = async (eventoId, usuarioAsignado) => {
    try{
        const datosEvento = await getDatosEvento(eventoId);

        let [ nEtapa ] = await pool.query("SELECT getEtapaAnt_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
        nEtapa = nEtapa[0];

        let query = 'CALL circular_evento(?, ?, ?)';
        let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado]
        
        const [rows] = await pool.query(query, params);

        return rows.affectedRows
    
    }catch (err){
        console.error(err);
        return 0;
    }
};

/** 
 ** Reasigna el evento a otro usuario
 *
 *i @param eventoId:        id del evento a reasignar
 *i        usuarioAsignado: id del usuario a asignar
*/
export const reasignarEvento = async (eventoId, usuarioAsignado) => {
    try{
        const datosEvento = await getDatosEvento(eventoId);

        const query  = "CALL insert_audiEvento(?, ?, ?)"
        const params = [eventoId, datosEvento.etapa, usuarioAsignado];

        const [rows] = await pool.query(query, params);

        return rows.affectedRows

    }catch (err){
        console.error(err);
        return 0;
    }
}

/** 
 ** Agrega la estimacion de horas al evento
 *
 *i @param eventoId:    id del evento a estimar
 *i        estimacion:  cantidad de horas que se estiman
*/
export const estimarEvento = async (eventoId, estimacion) => {
    try{
        const query  = "UPDATE evento SET eventoEstimacion = ? WHERE eventoId = ?"
        const params = [estimacion, eventoId];

        const [rows] = await pool.query(query, params);

        return rows.affectedRows
    
    }catch (err){
        console.error(err);
        return 0;
    }

};




// SUBS

/** 
 ** Busca datos necesariso de un evento
 *
 *i @param id: id del evento a buscar
 *
 *i @return datosEvento:
 *  {
 *      "tipo"      //i tipo de evento   
 *      "etapa"     //i etapa actual del evento
 *  }
*/
async function getDatosEvento(id){
    let [ datosEvento ] = await pool.query("SELECT eventoTipo AS tipo, eventoEtapa AS etapa FROM evento as e WHERE e.eventoId = " +id);
    datosEvento = datosEvento[0];
    return datosEvento;
}