import express from 'express';
import * as controller from './rol.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './rol.validator.js';

const rolRouter = express.Router();

rolRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getRoles
);
rolRouter.get(
    '/:rolId',
    validator({ params: validarId }),
    controller.getRol
);
rolRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertRol
);
rolRouter.patch(
    '/:rolId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateRol
);
rolRouter.delete(
    '/:rolId',
    validator({ params: validarId }),
    controller.deleteRol
);



export default rolRouter;