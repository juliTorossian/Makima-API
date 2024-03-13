import express from 'express';
import * as controller from './tipoEvento.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './tipoEvento.validator.js';
import { validarId as validarIdEvento } from './../evento/evento.validator.js';

const tipoEventoRouter = express.Router();

tipoEventoRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getTipoEventos
);
tipoEventoRouter.get(
    '/:tipoEventoId',
    validator({ params: validarId }),
    controller.getTipoEvento
);
tipoEventoRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertTipoEvento
);
tipoEventoRouter.patch(
    '/:tipoEventoId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateTipoEvento
);
tipoEventoRouter.delete(
    '/:tipoEventoId',
    validator({ params: validarId }),
    controller.deleteTipoEvento
);

tipoEventoRouter.post(
    '/:eventoId/asignarTareas',
    validator({ params: validarIdEvento }),
    controller.asignarTareas
);



export default tipoEventoRouter;