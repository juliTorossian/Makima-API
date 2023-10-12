import express from 'express';
import * as controller from './rol.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const rolRouter = express.Router();


rolRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getRoles);
rolRouter.get('/:rolId', controller.getRol);
rolRouter.post('/', controller.insertRol);
rolRouter.put('/', controller.updateRol);
rolRouter.delete('/:rolId', controller.deleteRol);



export default rolRouter;