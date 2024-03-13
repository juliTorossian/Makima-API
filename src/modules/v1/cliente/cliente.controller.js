import * as model from "./cliente.model.js";

export const insertCliente = async (req, res, next) => {
    try {
        const { body } = req; 
        let cliente = await model.insertCliente(body);

        if (cliente){
            res.status(201).json({
                success: true,
                data: cliente
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

export const updateCliente = async (req, res, next) => {
    try {
        const { body } = req; 
        let cliente = await model.updateCliente(body);

        if (cliente){
            res.status(200).json({
                success: true,
                data: cliente
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

export const deleteCliente = async (req, res, next) => {
    try {
        const { clienteId } = req.params; 
        let ok = await model.deleteCliente(clienteId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { clienteId: clienteId}
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

export const reactivarCliente = async (req, res, next) => {
    try {
        const { clienteId } = req.params; 
        let ok = await model.reactivarCliente(clienteId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { clienteId: clienteId}
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

export const getClientes = async (req, res, next) => {
    try {
        let clientes = await model.getClientes();
        if (clientes){
            res.status(200).json({
                success: true,
                data: clientes
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
export const getCliente = async (req, res, next) => {
    try {
        const { clienteId } = req.params; 
        let cliente = await model.getCliente(clienteId);

        if (cliente){
            res.status(200).json({
                success: true,
                data: cliente
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