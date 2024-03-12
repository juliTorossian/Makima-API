import { pool } from '../../../db.js';
import crypto from 'node:crypto';


/** 
 ** Busca todos los productos en la base de datos
 *
*/
export const getProductos = async () => {
    try{
        const query = "SELECT * FROM producto";
        let params = []
        const [rows] = await pool.query(query, params);

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
        throw new Error(err);
    }
}

/** 
 ** Busca un producto en especifico
 *
 * @param {string} productoId - id del producto
*/
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
        throw new Error(err);
    }
}

/** 
 ** Crea un nuevo producto
 *
 * @param {object} producto - objeto con los datos necesarios del producto
*/
export const insertProducto = async (producto) => {
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
        let prd = {
            id: productoId,
            ...producto
        }

        return prd;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Modifica un nuevo producto
 *
 * @param {object} producto - objeto con los datos necesarios del producto
*/
export const updateProducto = async (producto) => {
    try{
        const query = "UPDATE producto SET productoSigla = ?, productoNombre = ? , productoEntorno = ? WHERE productoId = ?";
        let params = [
            producto.sigla,
            producto.nombre,
            producto.entorno,
            producto.id
        ];
        const [rows] = await pool.query(query, params);
        return producto;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Elimina un nuevo producto
 *
 * @param {string} productoId: id del producto a eliminar
*/
export const deleteProducto = async (productoId) => {
    try{
        const query = "CALL delete_producto(?)";
        let params = [
            productoId
        ];
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err) {
        throw new Error(err);
    }
}

/** 
 ** Reactiva un nuevo producto
 *
 * @param {string} productoId: id del producto a eliminar
*/
export const reactivarProducto = async (productoId) => {
    try{
        const query = "UPDATE producto SET productoActivo = true WHERE productoId = ? AND productoActivo = false";
        let params = [
            productoId
        ];
        const [rows] = await pool.query(query, params);
        return 1;
    }catch (err) {
        throw new Error(err);
    }
}