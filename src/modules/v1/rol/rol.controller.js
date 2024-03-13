import * as model from "./rol.model.js";

export const insertRol = async (req, res, next) => {
    try {
        const { body } = req; 
        let rol = await model.insertRol(body);

        if (rol){
            res.status(201).json({
                success: true,
                data: rol
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

export const updateRol = async (req, res, next) => {
    try {
        const { body } = req; 
        let rol = await model.updateRol(body);

        if (rol){
            res.status(200).json({
                success: true,
                data: rol
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

export const deleteRol = async (req, res, next) => {
    try {
        const { rolId } = req.params; 
        let ok = await model.deleteEntorno(rolId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { rolId: rolId}
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

export const getRoles = async (req, res, next) => {
    try {
        let roles = await model.getRoles();
        if (roles){
            res.status(200).json({
                success: true,
                data: roles
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

export const getRol = async (req, res, next) => {
    try {
        const { rolId } = req.params; 
        let rol = await model.getEntorno(rolId);

        if (rol){
            res.status(200).json({
                success: true,
                data: rol
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