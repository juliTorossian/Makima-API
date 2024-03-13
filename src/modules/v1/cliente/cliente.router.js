import express from 'express';
import * as controller from './cliente.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './cliente.validator.js';

const clienteRouter = express.Router();


clienteRouter.get(
    '/:clienteId/reactivar',
    validator({ params: validarId }),
    controller.reactivarCliente
);

clienteRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getClientes
);
clienteRouter.get(
    '/:clienteId',
    validator({ params: validarId }),
    controller.getCliente
);
clienteRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertCliente
);
clienteRouter.patch(
    '/:clienteId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateCliente
);
clienteRouter.delete(
    '/:clienteId',
    validator({ params: validarId }),
    controller.deleteCliente
);


export default clienteRouter;