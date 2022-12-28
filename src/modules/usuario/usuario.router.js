import express from 'express';
import { iniciarSesion } from './usuario.controller.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', iniciarSesion);

export default usuarioRouter;