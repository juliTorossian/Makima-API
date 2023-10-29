// TOOK VER TOOKS LOS PRODUCTOS
// TOOK VER UN PRODUCTO
// TOOK CREAR UN NUEVO PRODUCTO
// TOOK MODIFICAR UN PRODUCTO
// TOOK ELIMINAR PRODUCTO
// TOOK REACTIVAR PRODUCTO


import { pool } from '../../../db.js';
import crypto from 'node:crypto';


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

        let response = [];
        rows.map( (row) => {
            response.push({
                "id": row.productoId,
                "sigla": row.productoSigla,
                "nombre": row.productoNombre,
                "entorno": {
                    "id": row.productoEntorno
                },
                "activo": row.productoActivo
            });
        });
        return response;
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

        let response = {
            "id": rows[0].productoId,
            "sigla": rows[0].productoSigla,
            "nombre": rows[0].productoNombre,
            "entorno": {
                "id": rows[0].productoEntorno
            },
            "activo": rows[0].productoActivo
        };
        return response;

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
        "sigla": ""
        "nombre": "CUS",            //* nombre del producto
        "entorno": "WEB"            //* entorno del producto
    }
    **/

    try{

        const productoId = crypto.randomUUID();

        const query = "INSERT producto(productoId, productoSigla, productoNombre, productoEntorno, productoActivo) VALUE (?, ?, ?, ?, true)";

        let params = [
            productoId,
            producto.sigla,
            producto.nombre,
            producto.entorno
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        let prd = {
            id: productoId,
            ...producto
        }

        return prd;

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
        "entorno": "WEB"            //* entorno del producto
    }
    **/

    try{

        const query = "UPDATE producto SET productoSigla = ?, productoNombre = ? , productoEntorno = ? WHERE productoId = ?";

        let params = [
            producto.sigla,
            producto.nombre,
            producto.entorno,
            producto.id
        ];

        const [rows] = await pool.query(query, params);

        // console.log(rows);

        return producto;

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