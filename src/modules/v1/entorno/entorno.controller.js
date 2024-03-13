import * as model from "./entorno.model.js";

export const insertEntorno = async (req, res, next) => {
    try {
        const { body } = req; 
        let entorno = await model.insertEntorno(body);

        if (entorno){
            res.status(201).json({
                success: true,
                data: entorno
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

export const updateEntorno = async (req, res, next) => {
    try {
        const { body } = req; 
        let entorno = await model.updateEntorno(body);

        if (entorno){
            res.status(200).json({
                success: true,
                data: entorno
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

export const deleteEntorno = async (req, res, next) => {
    try {
        const { entornoId } = req.params; 
        let ok = await model.deleteEntorno(entornoId);

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

export const getEntornos = async (req, res, next) => {
    try {
        let entornos = await model.getEntornos();
        if (entornos){
            res.status(200).json({
                success: true,
                data: entornos
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

export const getEntorno = async (req, res, next) => {
    try {
        const { entornoId } = req.params; 
        let entorno = await model.getEntorno(entornoId);

        if (entorno){
            res.status(200).json({
                success: true,
                data: entorno
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
