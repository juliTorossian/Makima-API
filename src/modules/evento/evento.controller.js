import { buscarEventos, buscarEventosPorUsuario, buscarEventosPorRol, eventoPorId, nuevoEvento, modificarEvento, eliminarEvento, avanzarEvento, retrocederEvento, reasignarEvento, estimarEvento } from "./evento.model.js";

export const eventos = async (req, res) => {
    // console.log(req.query.page)
    const eventos = await buscarEventos(req.query.page);
    res.json(eventos);
}

export const eventoXId = async (req, res) => {
    const evento = await eventoPorId(req.params.eventoId);
    res.json(evento);
}

export const eventoXUsuario = async (req, res) => {
    const evento = await buscarEventosPorUsuario(req.query.page, req.params.usuario);
    res.json(evento);
}

export const eventoXRol = async (req, res) => {
    const evento = await buscarEventosPorRol(req.query.page, req.params.rol);
    res.json(evento);
}

export const eventoNuevo = async (req, res) => {
    // {
    //     "tipo": "CUS",                          //* tipo de evento
    //     "titulo": "Titulo del nuevo evento",    //* titulo del evento
    //     "cliente": 2,                           //* id del cliente
    //     "producto": 2,                          //* id del programa
    //     "usuAlta": 1                            //* id del usuario de alta
    // }

    console.log(req.body);

    // const nEvento = {
    //     "tipo": "CUS",
    //     "titulo": "nuevo Evento desde la api",
    //     "cliente": 1,
    //     "producto": 2,
    //     "usuAlta": 1
    // }

    let ok = await nuevoEvento(req.body);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const modEvento = async (req, res) => {
    // {
    //     "id": 1                                 //* id evento
    //     "titulo": "Titulo del nuevo evento",    //* titulo del evento
    //     "cliente": 2,                           //* id del cliente
    //     "producto": 2,                          //* id del programa
    // }

    // console.log(req.body);

    let ok = await modificarEvento(req.body);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const delEvento = async (req, res) => {

    // eventoId     //* id evento

    // console.log(req.body);

    let ok = await eliminarEvento(req.query.eventoId);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const avzEvento = async (req, res) => {
    const ok = await avanzarEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}
export const rtcEvento = async (req, res) => {
    const ok = await retrocederEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}

export const reAsinEvento = async (req, res) => {
    const ok = await reasignarEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}

export const estEvento = async (req, res) => {
    const ok = await estimarEvento(req.params.evento, req.query.estimado);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}