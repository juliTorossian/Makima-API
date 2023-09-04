import express from 'express';
import * as controller from './producto.controller.js';

const productoRouter = express.Router();



productoRouter.get('/', controller.getProductos);
productoRouter.get('/:productoId', controller.getProducto);
productoRouter.patch('/:productoId', controller.updateProducto);
productoRouter.post('/', controller.insertProducto);
productoRouter.delete('/:productoId', controller.deleteProducto);

productoRouter.get('/:productoId/reactivar', controller.reactivarProducto);


export default productoRouter;