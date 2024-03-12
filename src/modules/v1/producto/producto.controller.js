import * as model from "./producto.model.js";

export const insertProducto = async (req, res, next) => {
    try {
        const { body } = req;
        const producto = await model.insertProducto(body);

        if (producto){
            res.status(201).json({
                success: true,
                data: producto
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

export const updateProducto = async (req, res, next) => {
    try {
        const { body } = req;
        const producto = await model.updateProducto(body);

        if (producto){
            res.status(200).json({
                success: true,
                data: producto
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

export const deleteProducto = async (req, res, next) => {
    try {
        const { productoId } = req.params; 
        let ok = await model.deleteProducto(productoId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { productoId: productoId}
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

export const reactivarProducto = async (req, res, next) => {
    try {
        const { productoId } = req.params; 
        let ok = await model.reactivarProducto(productoId);

        if (ok){
            res.status(200).json({
                success: true,
                data: { productoId: productoId}
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

export const getProductos = async (req, res, next) => {
    try {
        let productos = await model.getProductos();
        if (productos){
            res.status(200).json({
                success: true,
                data: productos
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

export const getProducto = async (req, res, next) => {
    try {
        const { productoId } = req.params; 
        let producto = await model.getProducto(productoId);

        if (producto){
            res.status(200).json({
                success: true,
                data: producto
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