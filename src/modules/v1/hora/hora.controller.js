import * as model from "./hora.model.js";

export const insertHora = async (req, res) => {

    let ok = await model.insertHora(req.body);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateHora = async (req, res) => {

    let ok = await model.updateHora(req.body);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteHora = async (req, res) => {

    let ok = await model.deleteHora(req.params.horaId);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getHoras = async (req, res) => {
    const horas = await model.getHoras();

    if (!(horas == null)){
        res.json(horas);
    }else{
        res.status(404).send('error');
    }
}

export const getHora = async (req, res) => {
    const hora = await model.getHora(req.params.horaId);

    if (!(hora == null)){
        res.json(hora);
    }else{
        res.status(404).send('error');
    }
}

export const getHorasUsuario = async (req, res) => {
    const horas = await model.getHorasUsuario(req.params.usuarioId);

    if (!(horas == null)){
        res.json(horas);
    }else{
        res.status(404).send('error');
    }
}
export const getHorasGeneral = async (req, res) => {
    const horas = await model.getHorasGenerales();

    if (!(horas == null)){
        res.json(horas);
    }else{
        res.status(404).send('error');
    }
}
