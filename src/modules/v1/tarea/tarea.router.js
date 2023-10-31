import express from 'express';
import * as controller from './tarea.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const tareaRouter = express.Router();


tareaRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getTareas);
tareaRouter.get('/:tareaId', controller.getTarea);
tareaRouter.post('/', controller.insertTarea);
tareaRouter.put('/', controller.updateTarea);
tareaRouter.delete('/:tareaId', controller.deleteTarea);

tareaRouter.get('/rol/:rol', cache(ONE_MINUTE_IN_SECONDS), controller.getTareasRol);

tareaRouter.get('/evento/:eventoId', cache(ONE_MINUTE_IN_SECONDS), controller.getTareasEvento);

tareaRouter.get('/evento/:eventoId/accion', controller.getTareaAccionCompleta);

export default tareaRouter;