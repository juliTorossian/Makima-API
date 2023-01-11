import express from 'express';
import * as controller from './producto.controller.js';

const productoRouter = express.Router();



productoRouter.get('/', controller.getProductos);
productoRouter.get('/:productoId', controller.getProducto);
// productoRouter.post('/', );
// productoRouter.put('/:clienteId', );
// productoRouter.delete('/:clienteId', );

// productoRouter.get('/:evento/circular/a', avzEvento);
// productoRouter.get('/:evento/circular/r', rtcEvento);
// productoRouter.get('/:evento/reasignar', reAsinEvento);
// productoRouter.get('/:evento/estimar', estEvento);


export default productoRouter;