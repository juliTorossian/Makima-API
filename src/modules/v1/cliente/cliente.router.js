import express from 'express';
import * as controller from './cliente.controller.js';

import { createCacheMiddleware as cache} from '../../../helper/middleware/cacheMiddleware.js';
import { ONE_MINUTE_IN_SECONDS } from '../../../helper/time.js';

const clienteRouter = express.Router();


clienteRouter.get('/', cache(ONE_MINUTE_IN_SECONDS), controller.getClientes);
clienteRouter.get('/:clienteId', controller.getCliente);
clienteRouter.post('/', controller.insertCliente);
clienteRouter.put('/', controller.updateCliente);
clienteRouter.delete('/:clienteId', controller.deleteCliente);

clienteRouter.get('/:clienteId/reactivar', controller.reactivarCliente);


export default clienteRouter;