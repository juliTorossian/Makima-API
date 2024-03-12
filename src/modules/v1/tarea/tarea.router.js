import express from 'express';
import * as controller from './tarea.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './tarea.validator.js';

const tareaRouter = express.Router();

tareaRouter.get(
    '/rol/:rol',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getTareasRol
);
tareaRouter.get(
    '/evento/:tipoEventoId',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getTareasEvento
);
tareaRouter.get(
    '/evento/:eventoId/accion',
    controller.getTareaAccionCompleta
);

tareaRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getTareas
);
tareaRouter.get(
    '/:tareaId',
    validator({ params: validarId }),
    controller.getTarea
);
tareaRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertTarea
);
tareaRouter.patch(
    '/:tareaId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateTarea
);
tareaRouter.delete(
    '/:tareaId',
    validator({ params: validarId }),
    controller.deleteTarea
);

export default tareaRouter;