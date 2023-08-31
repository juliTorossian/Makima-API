import express from 'express';
import * as controller from './usuario.controller.js';
import * as validator from './usuario.validator.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', controller.getUsuarios);
usuarioRouter.get('/:usuarioId', controller.getUsuario);

usuarioRouter.post('/', controller.insertUsuario);
usuarioRouter.patch('/:usuarioId', controller.updateUsuario);
usuarioRouter.delete('/:usuarioId', controller.deleteUsuario);
usuarioRouter.get('/:usuarioId/reactivar', controller.reactivarUsuario);

usuarioRouter.get('/:usuarioId/detalle', controller.getUsuarioDetalle);
usuarioRouter.get('/gestion/iniciarSesion', controller.iniciarSesion);

usuarioRouter.get('/rol/:rol', controller.getUsuariosRol);

usuarioRouter.get('/estadisticas/:usuarioId', controller.getEventosUsuarioEstadisticas);

export default usuarioRouter;