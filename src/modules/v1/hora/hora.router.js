import express from 'express';
import * as controller from './hora.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './hora.validator.js';

const horaRouter = express.Router();


horaRouter.get(
    '/generales/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getHorasGeneral
);
horaRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getHoras
);
horaRouter.get(
    '/:horaId',
    validator({ params: validarId }),
    controller.getHora
);
horaRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertHora
);
horaRouter.patch(
    '/:horaId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateHora
);
horaRouter.delete(
    '/:horaId',
    validator({ params: validarId }),
    controller.deleteHora
);

horaRouter.get(
    '/usuario/:usuarioId',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getHorasUsuario
);

export default horaRouter;