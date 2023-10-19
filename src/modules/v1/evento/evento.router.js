
import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';
import { uploadMiddleware } from '../../../helper/middleware/uploadMiddleware.js'

import express from 'express';
import * as controller from './evento.controller.js';


const eventoRouter = express.Router();


eventoRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getEventos);
eventoRouter.get('/:eventoId', controller.getEvento);
eventoRouter.post('/', controller.insertEvento);
eventoRouter.put('/', controller.updateEvento);
eventoRouter.delete('/:eventoId', controller.deleteEvento);

eventoRouter.get('/usuario/:usuario', cache(ONE_MINUTE_IN_SECONDS), controller.getEventosUsuario);
eventoRouter.get('/rol/:rol', cache(ONE_MINUTE_IN_SECONDS), controller.getEventosRol);

eventoRouter.get('/:evento/circular/a', controller.avanzarEvento);
eventoRouter.get('/:evento/circular/r', controller.retrocederEvento);
eventoRouter.get('/:evento/circular/c', controller.cerrarEvento);
eventoRouter.get('/:evento/reasignar', controller.reasignarEvento);
eventoRouter.post('/:evento/estimar', controller.estimarEvento);

eventoRouter.post('/:evento/comentar', uploadMiddleware, controller.comentarEvento);
eventoRouter.post('/:evento/adjuntar', uploadMiddleware, controller.adjuntarEvento);
eventoRouter.get('/:evento/comentarios', cache(ONE_MINUTE_IN_SECONDS), controller.getComentariosEvento);
eventoRouter.get('/:evento/adjuntos', cache(ONE_MINUTE_IN_SECONDS), controller.getAdjuntosEvento);

eventoRouter.get('/:evento/vida', controller.getVidaEvento);
eventoRouter.get('/:evento/detalle', controller.getEventoDetalle);

eventoRouter.get('/dashboard/tareaPortipo', cache(ONE_MINUTE_IN_SECONDS), controller.getTareasPorTipo);


export default eventoRouter;