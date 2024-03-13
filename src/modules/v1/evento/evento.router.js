
import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { uploadMiddleware } from '../../../helper/middleware/uploadMiddleware.js'
import { validarId, validar, validacionParcial } from './evento.validator.js';
import { validarId as validarIdUsuario } from './../usuario/usuario.validator.js'
import { validarId as validarIdRol } from './../rol/rol.validator.js'
import { validarId as validarIdEstimacion, validar as validarEstimacion } from './../estimacion/estimacion.validator.js'


import express from 'express';
import * as controller from './evento.controller.js';


const eventoRouter = express.Router();


eventoRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getEventos
);
eventoRouter.get(
    '/:eventoId',
    validator({ params: validarId }),
    controller.getEvento
);
eventoRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertEvento
);
eventoRouter.patch(
    '/:eventoId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateEvento
);
eventoRouter.delete(
    '/:eventoId',
    validator({ params: validarId }),
    controller.deleteEvento
);

eventoRouter.get(
    '/usuario/:usuarioId',
    cache(ONE_MINUTE_IN_SECONDS),
    validator({ params: validarIdUsuario }),
    controller.getEventosUsuario
);
eventoRouter.get(
    '/rol/:rolId',
    cache(ONE_MINUTE_IN_SECONDS),
    validator({ params: validarIdRol }),
    controller.getEventosRol
);

eventoRouter.get(
    '/:eventoId/circular/a',
    validator({ params: validarId }),
    controller.avanzarEvento
);
eventoRouter.get(
    '/:eventoId/circular/r',
    validator({ params: validarId }),
    controller.retrocederEvento
);
eventoRouter.get(
    '/:eventoId/circular/c',
    validator({ params: validarId }),
    controller.cerrarEvento
);
eventoRouter.get(
    '/:eventoId/reasignar',
    validator({ params: validarId }),
    controller.reasignarEvento
);
eventoRouter.post(
    '/:eventoId/estimar',
    validator({ params: validarId }),
    validator({ body: validarEstimacion }),
    controller.estimarEvento
);

eventoRouter.post(
    '/:eventoId/comentar',
    validator({ params: validarId }),
    controller.comentarEvento
);
eventoRouter.post(
    '/:eventoId/adjuntar',
    validator({ params: validarId }),
    uploadMiddleware,
    controller.adjuntarEvento
);
eventoRouter.get(
    '/:eventoId/comentarios',
    validator({ params: validarId }),
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getComentariosEvento
);
eventoRouter.get(
    '/:eventoId/adjuntos',
    validator({ params: validarId }),
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getAdjuntosEvento
);

eventoRouter.delete(
    '/adjunto/:adicion',
    controller.deleteAdjunto
);

eventoRouter.get(
    '/:eventoId/vida',
    validator({ params: validarId }),
    controller.getVidaEvento
);
eventoRouter.get(
    '/:eventoId/detalle',
    validator({ params: validarId }),
    controller.getEventoDetalle
);
eventoRouter.get(
    '/:eventoId/horas',
    validator({ params: validarId }),
    controller.getEventoHoras
);

eventoRouter.get(
    '/dashboard/tareaPortipo',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getTareasPorTipo
);


export default eventoRouter;