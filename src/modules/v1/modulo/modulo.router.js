import express from 'express';
import * as controller from './modulo.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const moduloRouter = express.Router();


moduloRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getModulos);
moduloRouter.get('/:moduloId', controller.getModulo);
moduloRouter.post('/', controller.insertModulo);
moduloRouter.put('/', controller.updateModulo);
moduloRouter.delete('/:moduloId' , controller.deleteModulo);

moduloRouter.get('/:padreId', cache(ONE_MINUTE_IN_SECONDS), controller.getModulosPadre);
moduloRouter.get('/busqueda/bus', cache(ONE_MINUTE_IN_SECONDS), controller.getModulosBusqueda);


export default moduloRouter;