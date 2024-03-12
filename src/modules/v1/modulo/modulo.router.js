import express from 'express';
import * as controller from './modulo.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarModuloId, validarModulo, validacionParcialmodulo } from './modulo.validator.js';

const moduloRouter = express.Router();


moduloRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getModulos
);
moduloRouter.get(
    '/:moduloId',
    validator({ params: validarModuloId }),
    controller.getModulo
);
moduloRouter.post(
    '/',
    validator({ body: validarModulo }),
    controller.insertModulo
);
moduloRouter.patch(
    '/:moduloId',
    validator({ params: validarModuloId }),
    validator({ body: validacionParcialmodulo }),
    controller.updateModulo
);
moduloRouter.delete(
    '/:moduloId',
    validator({ params: validarModuloId }),
    controller.deleteModulo
);

moduloRouter.get(
    '/:moduloId',
    validator({ params: validarModuloId }),
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getModulosPadre
);
moduloRouter.get(
    '/busqueda/bus',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getModulosBusqueda
);


export default moduloRouter;