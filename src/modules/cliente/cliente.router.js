import express from 'express';
import * as controller from './cliente.controller.js';

const clienteRouter = express.Router();



clienteRouter.get('/', controller.getClientes);
clienteRouter.get('/:clienteId', controller.getCliente);
// clienteRouter.post('/', );
// clienteRouter.put('/:clienteId', );
// clienteRouter.delete('/:clienteId', );

// clienteRouter.get('/:evento/circular/a', avzEvento);
// clienteRouter.get('/:evento/circular/r', rtcEvento);
// clienteRouter.get('/:evento/reasignar', reAsinEvento);
// clienteRouter.get('/:evento/estimar', estEvento);


export default clienteRouter;