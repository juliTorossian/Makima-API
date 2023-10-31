import express from 'express';
import * as controller from './producto.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const productoRouter = express.Router();

productoRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getProductos);
productoRouter.get('/:productoId', controller.getProducto);
productoRouter.patch('/:productoId', controller.updateProducto);
productoRouter.post('/', controller.insertProducto);
productoRouter.delete('/:productoId', controller.deleteProducto);

productoRouter.get('/:productoId/reactivar', controller.reactivarProducto);


export default productoRouter;