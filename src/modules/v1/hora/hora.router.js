import express from 'express';
import * as controller from './hora.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const horaRouter = express.Router();


horaRouter.get('/generales/', cache(ONE_MINUTE_IN_SECONDS), controller.getHorasGeneral);
horaRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getHoras);
horaRouter.get('/:horaId', controller.getHora);
horaRouter.post('/', controller.insertHora);
horaRouter.put('/', controller.updateHora);
horaRouter.delete('/:horaId', controller.deleteHora);

horaRouter.get('/usuario/:usuarioId', cache(ONE_MINUTE_IN_SECONDS), controller.getHorasUsuario);

export default horaRouter;