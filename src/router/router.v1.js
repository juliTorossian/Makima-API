import express from 'express';

import eventoRouter     from '../modules/v1/evento/evento.router.js';
import usuarioRouter    from '../modules/v1/usuario/usuario.router.js';
import clienteRouter    from '../modules/v1/cliente/cliente.router.js';
import productoRouter   from '../modules/v1/producto/producto.router.js';
import tipoEventoRouter from '../modules/v1/tipoEvento/tipoEvento.router.js';
import tareaRouter      from '../modules/v1/tarea/tarea.router.js';
import moduloRouter     from '../modules/v1/modulo/modulo.router.js';
import entornoRouter    from '../modules/v1/entorno/entorno.router.js';
import rolRouter        from '../modules/v1/rol/rol.router.js';
import dashboardRouter  from '../modules/v1/dashboard/dashboard.router.js';
import horaRouter       from '../modules/v1/hora/hora.router.js';

const routerV1 = express.Router();

routerV1.use('/evento'    , eventoRouter);
routerV1.use('/usuario'   , usuarioRouter);
routerV1.use('/cliente'   , clienteRouter);
routerV1.use('/producto'  , productoRouter);
routerV1.use('/tipoEvento', tipoEventoRouter);
routerV1.use('/tarea'     , tareaRouter);
routerV1.use('/modulo'    , moduloRouter);
routerV1.use('/entorno'   , entornoRouter);
routerV1.use('/rol'       , rolRouter);
routerV1.use('/hora'      , horaRouter);
routerV1.use('/dashboard' , dashboardRouter);


export default routerV1;