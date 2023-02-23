import express from 'express';
import * as controller from './evento.controller.js';

const eventoRouter = express.Router();


eventoRouter.get('/', controller.getEventos);
eventoRouter.get('/:eventoId', controller.getEvento);
eventoRouter.post('/', controller.insertEvento);
eventoRouter.put('/', controller.updateEvento);
eventoRouter.delete('/:eventoId', controller.deleteEvento);

eventoRouter.get('/usuario/:usuario', controller.getEventosUsuario);
eventoRouter.get('/rol/:rol', controller.getEventosRol);

eventoRouter.get('/:evento/circular/a', controller.avanzarEvento);
eventoRouter.get('/:evento/circular/r', controller.retrocederEvento);
eventoRouter.get('/:evento/reasignar', controller.reasignarEvento);
eventoRouter.get('/:evento/estimar', controller.estimarEvento);
eventoRouter.post('/:evento/comentar', controller.comentarEvento);
eventoRouter.post('/:evento/comentar/archivo', controller.comentarEventoArchivo);
eventoRouter.get('/:evento/comentarios', controller.getComentariosEvento);
eventoRouter.get('/:evento/vida', controller.getVidaEvento);
eventoRouter.get('/:evento/detalle', controller.getEventoDetalle);

eventoRouter.get('/dashboard/tareaPortipo', controller.getTareasPorTipo);


export default eventoRouter;