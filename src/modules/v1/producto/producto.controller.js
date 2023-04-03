import * as model from "./producto.model.js";

export const insertProducto = async (req, res) => {

    let ok = await model.insertProducto(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateProducto = async (req, res) => {

    let ok = await model.updateProducto(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteProducto = async (req, res) => {

    let ok = await model.deleteProducto(req.params.productoId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const reactivarProducto = async (req, res) => {

    let ok = await model.reactivarProducto(req.params.productoId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getProductos = async (req, res) => {
    const productos = await model.getProductos();

    if (!(productos == null)){
        res.json(productos);
    }else{
        res.status(404).send('error');
    }
}

export const getProducto = async (req, res) => {
    const producto = await model.getProducto(req.params.productoId);

    if (!(producto == null)){
        res.json(producto);
    }else{
        res.status(404).send('error');
    }
}