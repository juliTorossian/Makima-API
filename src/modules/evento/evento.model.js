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

export const buscarEventos = async (page) => {
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
};

export const buscarEventosPorUsuario = async (page, usuario) => {
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
};

export const buscarEventosPorRol = async (page, rol) => {
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
};

export const eventoPorId = async (eventoId) => {

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
        return 0;
    }


};

export const nuevoEvento = async (nEvento) => {
     
    /** 
    * ! Objeto que tiene que llegar por parametro (nEvento)
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

    {
        "evento": idEvento,                     //* id del evento insertado
        "etapa": 1,                             //i la etapa inicial siempre es 1
        "usuario": idUsuario,                   //i en este caso siempre es el usuario de alta
        "fecha": now()                          //* fecha del momento
    }
    **/

    try{

        //i CALL insert_eventos("MEJ", "insert desde sp", 1, 2, 1);

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
    }

}


export const modificarEvento = async (eventoM) => {
     
    /** 
    * ! Objeto que tiene que llegar por parametro (eventoM)
    {
        "id": 1                                 //* id del evento
        "tipo": "CUS",                          //! tipo de evento
        "numero": "??",                         //! numeto de Evento
        "titulo": "Titulo del nuevo evento",    //* titulo del evento
        "cerrado": 0                            //! siempre es false
        "etapa": 1                              //! siempre nace en 1
        "cliente": 2,                           //* id del cliente
        "producto": 2,                          //* id del programa
        "usuAlta": 1                            //! id del usuario de alta
        "fechaAlta": now()                      //! fecha del momento
    }

    {
        "evento": idEvento,                     //* id del evento insertado
        "etapa": 1,                             //i la etapa inicial siempre es 1
        "usuario": idUsuario,                   //i en este caso siempre es el usuario de alta
        "fecha": now()                          //* fecha del momento
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
    }

}


export const eliminarEvento = async (eventoId) => {

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
    }

}

export const avanzarEvento = async (eventoId, usuarioAsignado) => {

    const datosEvento = await getDatosEvento(eventoId);

    let [ nEtapa ] = await pool.query("SELECT getEtapaSig_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
    nEtapa = nEtapa[0];

    let query = 'CALL circular_evento(?, ?, ?)';
    let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado];


    
    const [rows] = await pool.query(query, params);

    return rows.affectedRows
};

export const retrocederEvento = async (eventoId, usuarioAsignado) => {


    const datosEvento = await getDatosEvento(eventoId);

    let [ nEtapa ] = await pool.query("SELECT getEtapaAnt_evento('" +datosEvento.tipo +"', " +datosEvento.etapa +") AS nuevaEtapa");
    nEtapa = nEtapa[0];

    let query = 'CALL circular_evento(?, ?, ?)';
    let params = [eventoId, nEtapa.nuevaEtapa, usuarioAsignado]
    
    const [rows] = await pool.query(query, params);

    return rows.affectedRows
};

export const reasignarEvento = async (eventoId, usuarioAsignado) => {

    const datosEvento = await getDatosEvento(eventoId);

    const query  = "CALL insert_audiEvento(?, ?, ?)"
    const params = [eventoId, datosEvento.etapa, usuarioAsignado];

    const [rows] = await pool.query(query, params);

    return rows.affectedRows
}

export const estimarEvento = async (eventoId, estimacion) => {

    const query  = "UPDATE evento SET eventoEstimacion = ? WHERE eventoId = ?"
    const params = [estimacion, eventoId];

    const [rows] = await pool.query(query, params);


    return rows.affectedRows

};




// SUBS

async function getDatosEvento(id){
    let [ datosEvento ] = await pool.query("SELECT eventoTipo AS tipo, eventoEtapa AS etapa FROM evento as e WHERE e.eventoId = " +id);
    datosEvento = datosEvento[0];
    return datosEvento;
}