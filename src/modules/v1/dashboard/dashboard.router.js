import express from 'express';
import * as controller from './dashboard.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/ultimosMovimientos', cache(ONE_MINUTE_IN_SECONDS), controller.getUltimosMovimientos);

export default dashboardRouter;