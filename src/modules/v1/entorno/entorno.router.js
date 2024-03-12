import express from 'express';
import * as controller from './entorno.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './entorno.validator.js';

const entornoRouter = express.Router();


entornoRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getEntornos
);
entornoRouter.get(
    '/:entornoId',
    validator({ params: validarId }),
    controller.getEntorno
);
entornoRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertEntorno
);
entornoRouter.patch(
    '/:entornoId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateEntorno
);
entornoRouter.delete(
    '/:entornoId',
    validator({ params: validarId }),
    controller.deleteEntorno
);

export default entornoRouter;