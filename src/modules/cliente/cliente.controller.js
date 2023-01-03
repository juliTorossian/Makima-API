import * as model from "./cliente.model.js";

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