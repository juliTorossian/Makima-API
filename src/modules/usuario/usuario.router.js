import express from 'express';
import * as controller from './usuario.controller.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', controller.getUsuarios);
usuarioRouter.get('/:usuarioId', controller.getUsuario);
usuarioRouter.post('/', controller.insertUsuario);
usuarioRouter.put('/', controller.updateUsuario);
usuarioRouter.delete('/:usuarioId', controller.deleteUsuario);
usuarioRouter.get('/:usuarioId/reactivar', controller.reactivarUsuario);

usuarioRouter.get('/', controller.getUsuarios);

usuarioRouter.get('/rol/:rol', controller.getUsuariosRol);

export default usuarioRouter;