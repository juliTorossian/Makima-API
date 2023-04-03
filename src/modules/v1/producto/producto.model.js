// TOOK VER TOOKS LOS PRODUCTOS
// TOOK VER UN PRODUCTO
// TOOK CREAR UN NUEVO PRODUCTO
// TOOK MODIFICAR UN PRODUCTO
// TOOK ELIMINAR PRODUCTO
// TOOK REACTIVAR PRODUCTO


import { pool } from '../../../db.js';


/** 
 ** Busca TOOKs los productos en la base de datos
 *
*/
export const getProductos = async () => {

    try{

        const query = "SELECT * FROM producto";
        let params = []

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return rows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

export const getProducto = async (productoId) => {

    try{

        const query = "SELECT * FROM producto WHERE productoId = ?";
        let params = [productoId]

        const [rows] = await pool.query(query, params);

        // console.log(rows[0]);

        return rows[0];

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Crea un nuevo producto
 *
 *i @param producto: objeto con los datos necesarios del producto - especificado mas abajo
*/
export const insertProducto = async (producto) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "nombre": "CUS",            //* nombre del producto
        "modulo": "CUSTOM",         //* modulo del producto
        "submodulo": "STK",         //* submodulo del producto
        "entorno": "WEB"            //* entorno del producto
    }
    **/

    try{

        const query = "INSERT producto(productoId, productoNombre, productoModulo, productoSubModulo, productoEntorno, productoActivo) VALUE ((SELECT getNewId()), ?, ?, ?, ?, true)";
        let params = [
            producto.nombre,
            producto.modulo,
            producto.submodulo,
            producto.entorno
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Modifica un nuevo producto
 *
 *i @param producto: objeto con los datos necesarios del producto - especificado mas abajo
*/
export const updateProducto = async (producto) => {

    /** 
    * i Objeto que tiene que llegar por parametro
    {
        "id": 1                     //* id del producto
        "nombre": "CUS",            //* nombre del producto
        "modulo": "CUSTOM",         //* modulo del producto
        "submodulo": "STK",         //* submodulo del producto
        "entorno": "WEB"            //* entorno del producto
    }
    **/

    try{

        const query = "UPDATE producto SET productoNombre = ? , productoModulo = ? , productoSubModulo = ? , productoEntorno = ? WHERE productoId = ?";
        let params = [
            producto.nombre,
            producto.modulo,
            producto.submodulo,
            producto.entorno,
            producto.id
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Elimina un nuevo producto
 *
 *i @param productoId: id del producto a eliminar
*/
export const deleteProducto = async (productoId) => {

    try{

        const query = "CALL delete_producto(?)";
        let params = [
            productoId
        ];

        const [rows] = await pool.query(query, params);

        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}

/** 
 ** Reactiva un nuevo producto
 *
 *i @param productoId: id del producto a eliminar
*/
export const reactivarProducto = async (productoId) => {

    try{

        const query = "UPDATE producto SET productoActivo = true WHERE productoId = ? AND productoActivo = false";
        let params = [
            productoId
        ];

        const [rows] = await pool.query(query, params);

        return rows.affectedRows;

    }catch (err) {
        console.error(err);
        return null;
    }
}