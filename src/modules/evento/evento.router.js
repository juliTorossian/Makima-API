import express from 'express';
import { eventos, eventoXUsuario, eventoXRol, eventoXId, eventoNuevo, modEvento, delEvento, avzEvento, rtcEvento, reAsinEvento, estEvento } from './evento.controller.js';

const eventoRouter = express.Router();

eventoRouter.get('/:eventoId', eventoXId);
eventoRouter.get('/usuario/:usuario', eventoXUsuario);
eventoRouter.get('/rol/:rol', eventoXRol);
eventoRouter.get('/', eventos);

eventoRouter.post('/nuevo', eventoNuevo);
eventoRouter.put('/mod', modEvento);
eventoRouter.delete('/del', delEvento);

eventoRouter.get('/:evento/circular/a', avzEvento);
eventoRouter.get('/:evento/circular/r', rtcEvento);
eventoRouter.get('/:evento/reasignar', reAsinEvento);
eventoRouter.get('/:evento/estimar', estEvento);


export default eventoRouter;