import * as model from "./cliente.model.js";

export const insertCliente = async (req, res) => {

    let ok = await model.insertCliente(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateCliente = async (req, res) => {

    let ok = await model.updateCliente(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteCliente = async (req, res) => {

    let ok = await model.deleteCliente(req.params.clienteId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const reactivarCliente = async (req, res) => {

    let ok = await model.reactivarCliente(req.params.clienteId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getClientes = async (req, res) => {
    const clientes = await model.getClientes();

    if (!(clientes == null)){
        res.json(clientes);
    }else{
        res.status(404).send('error');
    }
}
export const getCliente = async (req, res) => {
    const cliente = await model.getCliente(req.params.clienteId);

    if (!(cliente == null)){
        res.json(cliente);
    }else{
        res.status(404).send('error');
    }
}