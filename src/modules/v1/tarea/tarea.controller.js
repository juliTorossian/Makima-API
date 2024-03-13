import * as model from "./tarea.model.js";

export const getTareas = async (req, res,next) => {
    try {
        let tareas = await model.getTareas();
        if (tareas){
            res.status(200).json({
                success: true,
                data: tareas
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

export const getTarea = async (req, res,next) => {
    try {
        const { tareaId } = req.params; 
        let tarea = await model.getEntorno(tareaId);

        if (tarea){
            res.status(200).json({
                success: true,
                data: tarea
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

export const insertTarea = async (req, res,next) => {
    try {
        const { body } = req; 
        let tarea = await model.insertTarea(body);

        if (tarea){
            res.status(201).json({
                success: true,
                data: tarea
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

export const updateTarea = async (req, res,next) => {
    try {
        const { body } = req; 
        let tarea = await model.updateTarea(body);

        if (tarea){
            res.status(200).json({
                success: true,
                data: tarea
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

export const deleteTarea = async (req, res,next) => {
    res.status(404).send("No implementado")
}

export const getTareasRol = async (req, res) => {
    try {
        const { rol } = req.params
        let tareas = await model.getTareasRol(rol);
        if (tareas){
            res.status(200).json({
                success: true,
                data: tareas
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

export const getTareasEvento = async (req, res,next) => {
    try {
        let tareas = null;
        const { eventoId } = req.params;
        const tareasDelEveto = (req.query.no == true);
    
        if (!tareasDelEveto){
            tareas = await model.getTareasEvento(eventoId);
        }else{
            tareas = await model.getTareasNoEvento(eventoId);
        }

        if (tareas){
            res.status(200).json({
                success: true,
                data: tareas
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

export const getTareaAccionCompleta = async (req, res,next) => {
    try {
        const { eventoId } = req.params
        const { accion } = req.query
        let existe = await model.getTareaAccionCompleta(eventoId, accion);
        if (existe){
            res.status(200).json({
                success: true,
                data: existe
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