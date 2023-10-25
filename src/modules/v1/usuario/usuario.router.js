import express from 'express';
import * as controller from './usuario.controller.js';
import * as validator from './usuario.validator.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getUsuarios);
usuarioRouter.get('/:usuarioId', controller.getUsuario);

usuarioRouter.post('/', controller.insertUsuario);
usuarioRouter.patch('/:usuarioId', controller.updateUsuario);
usuarioRouter.delete('/:usuarioId', controller.deleteUsuario);
usuarioRouter.get('/:usuarioId/reactivar', controller.reactivarUsuario);

usuarioRouter.get('/:usuarioId/detalle', controller.getUsuarioDetalle);
usuarioRouter.get('/:usuarioId/preferencias', controller.getUsuarioPreferencias);
usuarioRouter.get('/:usuarioId/preferencias/:preferencia', controller.setDelUsuarioPreferencias);
usuarioRouter.get('/gestion/iniciarSesion', controller.iniciarSesion);

usuarioRouter.get('/rol/:rol', cache(ONE_MINUTE_IN_SECONDS), controller.getUsuariosRol);

usuarioRouter.get('/estadisticas/:usuarioId', cache(ONE_MINUTE_IN_SECONDS), controller.getEventosUsuarioEstadisticas);

export default usuarioRouter;