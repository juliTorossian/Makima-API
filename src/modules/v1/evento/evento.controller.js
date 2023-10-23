import { avisoEventoAsignado } from "../../../helper/envioMail.js";
import * as model from "./evento.model.js";
import * as modelUsuario from "../usuario/usuario.model.js";
import * as modelHora from "../hora/hora.model.js";
import * as validador from "./evento.validator.js";



export const getEventos = async (req, res) => {
    const { page } = req.query;
    const eventos = await model.getEventos(page);

    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const getEvento = async (req, res) => {
    const evento = await model.getEvento(req.params.eventoId);
    
    if (!(evento == null)){
        res.json(evento);
    }else{
        res.status(404).send('error');
    }
}

export const getEventoDetalle = async (req, res) => {
    const evento = await model.getEventoDetalle(req.params.evento);
    
    if (!(evento == null)){
        res.json(evento);
    }else{
        res.status(404).send('error');
    }
}

export const getEventoHoras = async (req, res) => {
    const evento = await modelHora.getHorasEvento(req.params.evento);
    
    if (!(evento == null)){
        res.json(evento);
    }else{
        res.status(404).send('error');
    }
}

export const getEventosUsuario = async (req, res) => {
    const eventos = await model.getEventosUsuario(req.query.page, req.params.usuario);
    
    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const getEventosRol = async (req, res) => {
    const eventos = await model.getEventosRol(req.query.page, req.params.rol);
    
    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const insertEvento = async (req, res) => {

    let eventoId = await model.insertEvento(req.body);

    if (!(eventoId === "" || eventoId === undefined)){
        res.json(eventoId);
    }else{
        res.status(404).send('error');
    }

}

export const updateEvento = async (req, res) => {

    

    let ok = await model.updateEvento(req.body);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteEvento = async (req, res) => {

    let ok = await model.deleteEvento(req.params.eventoId, req.query.usuario);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const cerrarEvento = async (req, res) => {

    let ok = await model.cerrarEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const avanzarEvento = async (req, res) => {

    

    const eventoId = req.params.evento;
    const usuarioId = req.query.usuario;
    const comentario = req.query.comentario;

    const ok = await model.avanzarEvento(eventoId,usuarioId,comentario);

    eviarAvisoMail(usuarioId, eventoId);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }
}
export const retrocederEvento = async (req, res) => {
    const ok = await model.retrocederEvento(req.params.evento, req.query.usuario, req.query.comentario);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }
}

export const reasignarEvento = async (req, res) => {
    const ok = await model.reasignarEvento(req.params.evento, req.query.usuario);

    
    eviarAvisoMail(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }
}

export const estimarEvento = async (req, res) => {

    try {
        console.log(req.body);
        const resultado = validador.validarEstimacion(req.body);
        console.log(resultado);

        if (!resultado.success) {
            // 422 Unprocessable Entity
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }
        const estimacion = await model.estimarEvento(resultado.data);
    
        if (estimacion != null){
            res.status(201).json(estimacion);
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

}

export const comentarEvento = async (req, res) => {

    // console.log("(145:evento.controller)")

    // console.log(JSON.parse(req.body.comentario))
    // console.log(req.file)
    const comentario = req.body;
    const ok = await model.comentarEvento(comentario);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }

}


export const adjuntarEvento = async (req, res) => {

    const files = req.files
    const eventoId = req.params.evento
    const usuarioId = req.query.usuario

    console.log(files)
    // console.log(usuarioId); 

    const ok = await model.adjuntarEvento(eventoId, usuarioId, files);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteAdjunto = async (req, res) => {

    const adicionId = req.params.adicion
    const ok = await model.deleteAdjunto(adicionId);

    if (ok > 0){
        res.json("ok");
    }else{
        res.status(404).send('error');
    }
}

export const getAdjuntosEvento = async (req, res) => {
    
    const adjuntos = await model.getAdjuntosEvento(req.params.evento);
    
    if (!(adjuntos == null)){
        res.json(adjuntos);
    }else{
        res.status(404).send('error');
    }
}

export const getComentariosEvento = async (req, res) => {
    const comentarios = await model.getComentariosEvento(req.params.evento);

    if (comentarios != null){
        res.json(comentarios);
    }else{
        res.status(404).send('error');
    }
}
export const getTareasPorTipo = async (req, res) => {
    const rol = req.query.rol;
    const tareasTipo = await model.getTareasPorTipo(rol);
    
    if (!(tareasTipo == null)){
        res.json(tareasTipo);
    }else{
        res.status(404).send('error');
    }
}

export const getVidaEvento = async (req, res) => {
    const vida = await model.getVidaEvento(req.params.evento);

    if (vida.length > 0){
        res.json(vida);
    }else{
        res.status(404).send('error');
    }
}

async function eviarAvisoMail(usuarioId, eventoId){

    const usuario = await modelUsuario.getUsuario(usuarioId);
    const evento  = await model.getEvento(eventoId);

    // avisoEventoAsignado(usuario, evento);

}