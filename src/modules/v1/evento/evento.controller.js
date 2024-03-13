
import { avisoEventoAsignado } from "../../../helper/mail/envioMail.js";
import * as model from "./evento.model.js";
import * as modelUsuario from "../usuario/usuario.model.js";
import * as modelHora from "../hora/hora.model.js";


export const getEventos = async (req, res, next) => {
    try {
        const { page } = req.query;
        let eventos = await model.getEventos(page);
        if (eventos){
            res.status(200).json({
                success: true,
                data: eventos
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params; 
        let evento = await model.getEvento(eventoId);

        if (evento){
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getEventoDetalle = async (req, res, next) => {
    try {
        const { eventoId } = req.params; 
        let evento = await model.getEventoDetalle(eventoId);

        if (evento){
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getEventoHoras = async (req, res, next) => {
    try {
        const { eventoId } = req.params; 
        let evento = await modelHora.getHorasEvento(eventoId);

        if (evento){
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getEventosUsuario = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        const { page } = req.query;
        let eventos = await model.getEventosUsuario(page, usuarioId);

        if (eventos){
            res.status(200).json({
                success: true,
                data: eventos
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getEventosRol = async (req, res, next) => {
    try {
        const { rolId } = req.params;
        const { page } = req.query;
        let eventos = await model.getEventosUsuario(page, rolId);

        if (eventos){
            res.status(200).json({
                success: true,
                data: eventos
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const insertEvento = async (req, res, next) => {
    try {
        const { body } = req; 
        let evento = await model.insertEvento(body);

        if (evento){
            res.status(201).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const updateEvento = async (req, res, next) => {
    try {
        const { body } = req; 
        let evento = await model.updateEvento(body);

        if (evento){
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const deleteEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        const { usuario } = req.query; 
        let ok = await model.deleteEvento(eventoId, usuario);

        if (ok){
            res.status(200).json({
                success: true,
                data: { eventoId: eventoId}
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const cerrarEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        const { usuario } = req.query; 
        let evento = await model.cerrarEvento(eventoId, usuario);

        if (evento){
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const avanzarEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        const { usuario, comentario } = req.query; 
        let evento = await model.avanzarEvento(eventoId, usuario, comentario);

        if (evento){
            eviarAvisoMail(usuario, eventoId);
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}
export const retrocederEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        const { usuario, comentario } = req.query; 
        let evento = await model.retrocederEvento(eventoId, usuario, comentario);

        if (evento){
            eviarAvisoMail(usuario, eventoId);
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const reasignarEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        const { usuario } = req.query; 
        let evento = await model.reasignarEvento(eventoId, usuario,);

        if (evento){
            eviarAvisoMail(usuario, eventoId);
            res.status(200).json({
                success: true,
                data: evento
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const estimarEvento = async (req, res, next) => {
    try {
        const { body } = req;
        const estimacion = await model.estimarEvento(body);
        if (estimacion){
            res.status(200).json({
                success: true,
                data: estimacion
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const comentarEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params; 
        let ok = await model.comentarEvento(eventoId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { eventoId: eventoId}
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const adjuntarEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params; 
        const { usuarioId } = req.query;
        const { files } = req;
        let ok = await model.adjuntarEvento(eventoId, usuarioId, files);

        if (ok){
            res.status(200).json({
                success: true,
                data: { entornoId: entornoId}
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const deleteAdjunto = async (req, res, next) => {
    try {
        const { adicionId } = req.params; 
        let ok = await model.deleteAdjunto(adicionId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { adicionId: adicionId}
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getAdjuntosEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        let adjuntos = await model.getAdjuntosEvento(eventoId);
        if (adjuntos){
            res.status(200).json({
                success: true,
                data: adjuntos
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getComentariosEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        let comentarios = await model.getComentariosEvento(eventoId);
        if (comentarios){
            res.status(200).json({
                success: true,
                data: comentarios
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getTareasPorTipo = async (req, res, next) => {
    try {
        const { rol } = req.query;
        const tareasTipo = await model.getTareasPorTipo(rol);
        if (tareasTipo){
            res.status(200).json({
                success: true,
                data: tareasTipo
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

export const getVidaEvento = async (req, res, next) => {
    try {
        const { eventoId } = req.params;
        let vida = await model.getVidaEvento(eventoId);
        if (vida){
            res.status(200).json({
                success: true,
                data: vida
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}

// SUBS

async function eviarAvisoMail(usuarioId, eventoId){

    const usuario = await modelUsuario.getUsuario(usuarioId);
    const evento  = await model.getEvento(eventoId);

    avisoEventoAsignado(usuario, evento);

}