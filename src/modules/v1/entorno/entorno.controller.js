import * as model from "./entorno.model.js";

export const insertEntorno = async (req, res) => {

    let ok = await model.insertEntorno(req.body);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateEntorno = async (req, res) => {

    let ok = await model.updateEntorno(req.body);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteEntorno = async (req, res) => {

    let ok = await model.deleteEntorno(req.params.entornoId);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getEntornos = async (req, res) => {
    const clientes = await model.getEntornos();

    if (!(clientes == null)){
        res.json(clientes);
    }else{
        res.status(404).send('error');
    }
}

export const getEntorno = async (req, res) => {
    const cliente = await model.getEntorno(req.params.entornoId);

    if (!(cliente == null)){
        res.json(cliente);
    }else{
        res.status(404).send('error');
    }
}
