import * as model from "./usuario.model.js";

export const insertUsuario = async (req, res, next) => {
    try {
        const { body } = req; 
        let usuario = await model.insertUsuario(body);

        if (usuario){
            res.status(201).json({
                success: true,
                data: usuario
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

export const updateUsuario = async (req, res, next) => {
    try {
        const { body } = req; 
        let usuario = await model.updateUsuario(body);

        if (usuario){
            res.status(200).json({
                success: true,
                data: usuario
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

export const deleteUsuario = async (req, res, next) => {
    try {
        const { usuarioId } = req.params; 
        let ok = await model.deleteUsuario(usuarioId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { usuarioId: usuarioId}
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

export const reactivarUsuario = async (req, res, next) => {
    try {
        const { usuarioId } = req.params; 
        let ok = await model.reactivarUsuario(usuarioId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { usuarioId: usuarioId}
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

export const iniciarSesion = async (req, res, next) => {
    try {
        const { usuario, password } = req.body;
        let token = await model.existeUsuario(usuario, password, true);

        if (token){
            res.status(200).json({
                success: true,
                data: { token: token}
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

export const getUsuarios = async (req, res, next) => {
    try {
        let usuarios = await model.getUsuarios();
        if (usuarios){
            res.status(200).json({
                success: true,
                data: usuarios
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

export const getUsuario = async (req, res, next) => {
    try {
        let usuario = null;
        const { usuarioId } = req.params;
        const { token } = req.query;
        if (token){
            usuario = await model.getUsuarioToken(usuarioId);
        }else{
            usuario = await model.getUsuario(usuarioId);
        }

        if (usuario){
            res.status(200).json({
                success: true,
                data: usuario
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

export const getUsuariosRol = async (req, res, next) => {
    try {
        const { rolId } = req.params;
        let usuarios = await model.getUsuariosRol(rolId);
        if (usuarios){
            res.status(200).json({
                success: true,
                data: usuarios
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

export const getUsuarioDetalle = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        let usuario = await model.getUsuarioDetalle(usuarioId);
        if (usuario){
            res.status(200).json({
                success: true,
                data: usuario
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

export const getUsuarioPreferencias = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        let preferencias = await model.getUsuarioPreferencias(usuarioId);
        if (preferencias){
            res.status(200).json({
                success: true,
                data: preferencias
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

export const setDelUsuarioPreferencias = async (req, res, next) => {
    try {
        const { usuarioId, preferencia } = req.params; 
        let ok = await model.setDelUsuarioPreferencias(usuarioId, preferencia);

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

export const getEventosUsuarioEstadisticas = async (req, res, next) => {
    try {
        const { usuarioId } = req.params;
        let eventos = await model.getEventosUsuarioEstadisticas(usuarioId);
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