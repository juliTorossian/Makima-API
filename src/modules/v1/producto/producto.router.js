import express from 'express';
import * as controller from './producto.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './producto.validator.js';

const productoRouter = express.Router();

productoRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getProductos
);
productoRouter.get(
    '/:productoId',
    validator({ params: validarId }),
    controller.getProducto
);
productoRouter.patch(
    '/:productoId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateProducto
);
productoRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertProducto
);
productoRouter.delete(
    '/:productoId',
    validator({ params: validarId }),
    controller.deleteProducto
);

productoRouter.get(
    '/:productoId/reactivar',
    validator({ params: validarId }),
    controller.reactivarProducto
);


export default productoRouter;