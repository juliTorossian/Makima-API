import express from 'express';
import * as controller from './cliente.controller.js';

const clienteRouter = express.Router();


clienteRouter.get(   '/'          , controller.getClientes);
clienteRouter.get(   '/:clienteId', controller.getCliente);
clienteRouter.post(  '/'          , controller.insertCliente);
clienteRouter.put(   '/'          , controller.updateCliente);
clienteRouter.delete('/:clienteId', controller.deleteCliente);

clienteRouter.get('/:clienteId/reactivar', controller.reactivarCliente);


export default clienteRouter;