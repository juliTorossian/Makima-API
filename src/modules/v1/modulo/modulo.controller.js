import * as model from "./modulo.model.js";

export const insertModulo = async (req, res, next) => {
    try {
        const { body } = req; 
        let modulo = await model.insertModulo(body);

        if (modulo){
            res.status(201).json({
                success: true,
                data: modulo
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

export const updateModulo = async (req, res, next) => {
    try {
        const { body } = req; 
        let modulo = await model.updateModulo(body);

        if (modulo){
            res.status(200).json({
                success: true,
                data: modulo
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

export const deleteModulo = async (req, res, next) => {
    try {
        const { moduloId } = req.params; 
        let ok = await model.deleteModulo(moduloId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { moduloId: moduloId}
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

export const getModulos = async (req, res, next) => {
    try {
        let modulos = await model.getModulos();
        if (modulos){
            res.status(200).json({
                success: true,
                data: modulos
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

export const getModulo = async (req, res, next) => {
    try {
        const { moduloId } = req.params; 
        let modulo = await model.getModulo(moduloId);

        if (modulo){
            res.status(200).json({
                success: true,
                data: JSON.parse(modulo)
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

export const getModulosBusqueda = async (req, res, next) => {

    try {
        let modulos = await model.getModulosBusqueda();

        if (modulos){
            res.status(201).json({
                success: true,
                data: JSON.parse(modulos)
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

export const getModulosPadre = async (req, res, next) => {

    try {
        const { padreId } = req.params; 
        let modulos = await model.getModulosPadre(padreId);

        if (modulos){
            res.status(201).json({
                success: true,
                data: JSON.parse(modulos)
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