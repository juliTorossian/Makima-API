import * as model from "./tipoEvento.model.js";

export const getTipoEventos = async (req, res, next) => {
    try {
        let tipoEventos = null;
        const { dashboard } = req.query
        if(dashboard){
            tipoEventos = await model.getTipoEventosDashboard();
        }else{
            tipoEventos = await model.getTipoEventos();
        }
        
        if (tipoEventos){
            res.status(200).json({
                success: true,
                data: tipoEventos
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

export const getTipoEvento = async (req, res, next) => {
    try {
        const { tipoEventoId } = req.params;
        const tipoEvento = await model.getTipoEvento(tipoEventoId);

        if (tipoEvento){
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

export const insertTipoEvento = async (req, res, next) => {
    try {
        const { body } = req; 
        let tipoEvento = await model.insertTipoEvento(body);

        if (tipoEvento){
            res.status(201).json({
                success: true,
                data: tipoEvento
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

export const updateTipoEvento = async (req, res, next) => {
    try {
        const { body } = req; 
        let tipoEvento = await model.updateTipoEvento(body);

        if (tipoEvento){
            res.status(200).json({
                success: true,
                data: tipoEvento
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

export const deleteTipoEvento = async (req, res, next) => {
    try {
        const { tipoEventoId } = req.params; 
        let ok = await model.deleteTipoEvento(tipoEventoId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { tipoEventoId: tipoEventoId}
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

export const asignarTareas = async (req, res, next) => {
    try {
        const { body } = req; 
        let ok = await model.asignarTareas(body);

        if (ok){
            res.status(200).json({
                success: true,
                data: ''
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