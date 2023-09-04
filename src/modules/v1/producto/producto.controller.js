import * as model from "./producto.model.js";
import * as validador from "./producto.validator.js";

export const insertProducto = async (req, res) => {

    try {

        const resultado = validador.validarProducto(req.body);
        console.log(resultado);

        if (!resultado.success) {
            // 422 Unprocessable Entity
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }
        const nuevoProducto = await model.insertProducto(resultado.data);
    
        if (nuevoProducto != null){
            res.status(201).json(nuevoProducto);
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }


    // let ok = await model.insertProducto(req.body);

    // if (ok > 0){
    //     res.status(201).json("ok");
    // }else{
    //     res.status(404).send('error');
    // }

}

export const updateProducto = async (req, res) => {
    
    try {

        const resultado = validador.validacionParcialProducto(req.body);
        // console.log(resultado);

        if (!resultado.success) {
            // 422 Unprocessable Entity
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }

        let aux;
        if (!resultado.data.id){
            aux = {id:req.params.productoId, ...resultado.data}
        }else{
            aux = resultado.data
        }

        const productoMod = await model.updateProducto(aux);

        if (productoMod != null){
            res.status(201).json(productoMod);
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }

    // let ok = await model.updateProducto(req.body);

    // if (ok > 0){
    //     res.status(201).json("ok");
    // }else{
    //     res.status(404).send('error');
    // }

}

export const deleteProducto = async (req, res) => {

    let ok = await model.deleteProducto(req.params.productoId);

    if (ok > 0){
        res.status(201).json("ok");
    }else{
        res.status(404).send('error');
    }

}

export const reactivarProducto = async (req, res) => {

    let ok = await model.reactivarProducto(req.params.productoId);

    if (ok > 0){
        res.status(201).json("ok");
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