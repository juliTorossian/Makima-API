import express from 'express';
import * as controller from './usuario.controller.js';

import { createValidationMiddleware as validator} from '../../../helper/middleware/createValidationMiddleware.js';
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { validarId, validar, validacionParcial } from './usuario.validator.js';


const usuarioRouter = express.Router();

usuarioRouter.get(
    '/',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getUsuarios
);
usuarioRouter.get(
    '/:usuarioId',
    // validator({ params: validarId}),
    controller.getUsuario
);

usuarioRouter.post(
    '/',
    validator({ body: validar }),
    controller.insertUsuario
);
usuarioRouter.patch(
    '/:usuarioId',
    validator({ params: validarId }),
    validator({ body: validacionParcial }),
    controller.updateUsuario
);
usuarioRouter.delete(
    '/:usuarioId',
    validator({ params: validarId }),
    controller.deleteUsuario
);
usuarioRouter.get(
    '/:usuarioId/reactivar',
    validator({ params: validarId }),
    controller.reactivarUsuario
);

usuarioRouter.get(
    '/:usuarioId/detalle',
    validator({ params: validarId }),
    controller.getUsuarioDetalle
);
usuarioRouter.get(
    '/:usuarioId/preferencias',
    validator({ params: validarId }),
    controller.getUsuarioPreferencias
);
usuarioRouter.get(
    '/:usuarioId/preferencias/:preferencia',
    validator({ params: validarId }),
    controller.setDelUsuarioPreferencias
);
usuarioRouter.post(
    '/gestion/iniciarSesion',
    controller.iniciarSesion
);

usuarioRouter.get(
    '/rol/:rol',
    cache(ONE_MINUTE_IN_SECONDS),
    controller.getUsuariosRol
);

usuarioRouter.get(
    '/estadisticas/:usuarioId',
    cache(ONE_MINUTE_IN_SECONDS),
    validator({ params: validarId }),
    controller.getEventosUsuarioEstadisticas
);

export default usuarioRouter;