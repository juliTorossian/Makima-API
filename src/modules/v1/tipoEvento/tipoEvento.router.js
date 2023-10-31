import express from 'express';
import * as controller from './tipoEvento.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const tipoEventoRouter = express.Router();


tipoEventoRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getTipoEventos);
tipoEventoRouter.get('/:tipoEventoId', controller.getTipoEvento);
tipoEventoRouter.post('/', controller.insertTipoEvento);
tipoEventoRouter.put('/', controller.updateTipoEvento);
tipoEventoRouter.delete('/:tipoEventoId', controller.deleteTipoEvento);

tipoEventoRouter.post('/:eventoId/asignarTareas', controller.asignarTareas);



export default tipoEventoRouter;