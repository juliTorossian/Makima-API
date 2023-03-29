import express from 'express';

import eventoRouter     from '../modules/evento/v1/evento.router.js';
import usuarioRouter    from '../modules/usuario/usuario.router.js';
import clienteRouter    from '../modules/cliente/cliente.router.js';
import productoRouter   from '../modules/producto/producto.router.js';
import tipoEventoRouter from '../modules/tipoEvento/tipoEvento.router.js';
import tareaRouter      from '../modules/tarea/tarea.router.js';
import moduloRouter     from '../modules/modulo/modulo.router.js';
import entornoRouter    from '../modules/entorno/entorno.router.js';
import rolRouter        from '../modules/rol/rol.router.js';
import dashboardRouter  from '../modules/dashboard/dashboard.router.js';
import horaRouter       from '../modules/hora/hora.router.js';

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