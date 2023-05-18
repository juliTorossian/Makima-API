import * as model from "./tarea.model.js";

export const getTareas = async (req, res) => {
    const tareas = await model.getTareas();

    if (!(tareas == null)){
        res.json(tareas);
    }else{
        res.status(404).send('error');
    }
}

export const getTarea = async (req, res) => {
    const tarea = await model.getTarea(req.params.tareaId);

    if (!(tarea == null)){
        res.json(tarea);
    }else{
        res.status(404).send('error');
    }
}

export const insertTarea = async (req, res) => {

    let ok = await model.insertTarea(req.body);

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }

}

export const updateTarea = async (req, res) => {

    let ok = await model.updateTarea(req.body);

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }

}

export const deleteTarea = async (req, res) => {

    res.status(404).send("No implementado")

    // let ok = await model.deleteTarea(req.params.tipoEventoId);

    // if (ok > 0){
    //     res.status(200).send("ok");
    // }else{
    //     res.status(404).send('error');
    // }

}

export const getTareasRol = async (req, res) => {
    const tareas = await model.getTareasRol(req.params.rol);

    if (!(tareas == null)){
        res.json(tareas);
    }else{
        res.status(404).send('error');
    }
}

export const getTareasEvento = async (req, res) => {
    let tareas = null;
    const eventoId = req.params.eventoId;
    const tareasDelEveto = (req.query.no == true);

    if (!tareasDelEveto){
        tareas = await model.getTareasEvento(eventoId);
    }else{
        tareas = await model.getTareasNoEvento(eventoId);
    }

    if (!(tareas == null)){
        res.json(tareas);
    }else{
        res.status(404).send('error');
    }
}

export const getTareaAccionCompleta = async (req, res) => {

    console.log(req.params.eventoId);
    console.log(req.query.accion);

    let ok = await model.getTareaAccionCompleta(req.params.eventoId, req.query.accion);

    if (ok!=undefined){
        res.status(200).json(ok);
    }else{
        res.status(404).send('error');
    }

}

// export const getTareasNoEvento = async (req, res) => {
//     const tareas = await model.getTareasNoEvento(req.params.eventoId);

//     if (!(tareas == null)){
//         res.json(tareas);
//     }else{
//         res.status(404).send('error');
//     }
// }