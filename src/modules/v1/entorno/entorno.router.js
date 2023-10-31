import express from 'express';
import * as controller from './entorno.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const entornoRouter = express.Router();


entornoRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getEntornos);
entornoRouter.get('/:entornoId', controller.getEntorno);
entornoRouter.post('/', controller.insertEntorno);
entornoRouter.put('/', controller.updateEntorno);
entornoRouter.delete('/:entornoId', controller.deleteEntorno);


export default entornoRouter;