import * as model from "./tipoEvento.model.js";

export const getTipoEventos = async (req, res) => {

    let tipoEventos = null;

    // console.log(req.query.dashboard);

    if (req.query.dashboard){
        tipoEventos = await model.getTipoEventosDashboard();
    }else{
        tipoEventos = await model.getTipoEventos();
    }


    if (!(tipoEventos == null)){
        res.json(tipoEventos);
    }else{
        res.status(404).send('error');
    }
}

export const getTipoEvento = async (req, res) => {
    const tipoEvento = await model.getTipoEvento(req.params.tipoEventoId);

    if (!(tipoEvento == null)){
        res.json(tipoEvento);
    }else{
        res.status(404).send('error');
    }
}

export const insertTipoEvento = async (req, res) => {

    let ok = await model.insertTipoEvento(req.body);

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }

}

export const updateTipoEvento = async (req, res) => {

    let ok = await model.updateTipoEvento(req.body);

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }

}

export const deleteTipoEvento = async (req, res) => {

    let ok = await model.deleteTipoEvento(req.params.tipoEventoId);

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }

}

export const asignarTareas = async (req, res) => {

    let ok = await model.asignarTareas(req.body)

    if (ok > 0){
        res.status(200).json("success");
    }else{
        res.status(404).send('error');
    }
}