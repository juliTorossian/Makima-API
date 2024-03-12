import * as model from "./hora.model.js";

export const insertHora = async (req, res, next) => {
    try {
        const { body } = req; 
        let hora = await model.insertHora(body);

        if (hora){
            res.status(201).json({
                success: true,
                data: hora
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

export const updateHora = async (req, res, next) => {
    try {
        const { body } = req; 
        let hora = await model.updateHora(body);

        if (hora){
            res.status(200).json({
                success: true,
                data: hora
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

export const deleteHora = async (req, res, next) => {
    try {
        const { horaId } = req.params; 
        let ok = await model.deleteHora(horaId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { horaId: horaId}
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

export const getHoras = async (req, res, next) => {
    try {
        let horas = await model.getHoras();
        if (horas){
            res.status(200).json({
                success: true,
                data: horas
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

export const getHora = async (req, res, next) => {
    try {
        const { horaId } = req.params; 
        let hora = await model.getHora(horaId);

        if (hora){
            res.status(200).json({
                success: true,
                data: hora
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

export const getHorasUsuario = async (req, res, next) => {
    try {
        const { usuarioId } = req.params; 
        let horas = await model.getHorasUsuario(usuarioId);

        if (horas){
            res.status(200).json({
                success: true,
                data: horas
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
export const getHorasGeneral = async (req, res, next) => {
    try {
        let horas = await model.getHorasGenerales();
        if (horas){
            res.status(200).json({
                success: true,
                data: horas
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
