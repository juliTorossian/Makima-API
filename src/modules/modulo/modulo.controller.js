import * as model from "./modulo.model.js";

export const insertModulo = async (req, res) => {

    let ok = await model.insertModulo(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateModulo = async (req, res) => {

    let ok = await model.updateModulo(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteModulo = async (req, res) => {

    let ok = await model.deleteModulo(req.params.moduloId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getModulos = async (req, res) => {
    const clientes = await model.getModulos();

    if (!(clientes == null)){
        res.json(clientes);
    }else{
        res.status(404).send('error');
    }
}

export const getModulo = async (req, res) => {
    const cliente = await model.getModulo(req.params.moduloId);

    if (!(cliente == null)){
        res.json(cliente);
    }else{
        res.status(404).send('error');
    }
}

export const getModulosBusqueda = async (req, res) => {
    const cliente = await model.getModulosBusqueda();

    if (!(cliente == null)){
        res.json(cliente);
    }else{
        res.status(404).send('error');
    }
}

export const getModulosPadre = async (req, res) => {
    const cliente = await model.getModulosPadre(req.params.padreId);

    if (!(cliente == null)){
        res.json(cliente);
    }else{
        res.status(404).send('error');
    }
}