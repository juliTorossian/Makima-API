import express from 'express';

import eventoRouter     from '../modules/v2/evento/evento.router.js';
import usuarioRouter    from '../modules/v2/usuario/usuario.router.js';
import clienteRouter    from '../modules/v2/cliente/cliente.router.js';
import tareaRouter      from '../modules/v2/tarea/tarea.router.js';
import tipoEventoRouter from '../modules/v2/tipoEvento/tipoEvento.router.js';
import entornoRouter    from '../modules/v2/entorno/entorno.router.js';
import moduloRouter     from '../modules/v2/modulo/modulo.router.js';
import productoRouter   from '../modules/v2/producto/producto.router.js';
import rolRouter        from '../modules/v2/rol/rol.router.js';
// import dashboardRouter  from '../modules/v2/dashboard/dashboard.router.js';
// import horaRouter       from '../modules/v2/hora/hora.router.js';

const routerV2 = express.Router();

routerV2.use('/evento'    , eventoRouter);
routerV2.use('/usuario'   , usuarioRouter);
routerV2.use('/cliente'   , clienteRouter);
routerV2.use('/tarea'     , tareaRouter);
routerV2.use('/tipoEvento', tipoEventoRouter);
routerV2.use('/entorno'   , entornoRouter);
routerV2.use('/modulo'    , moduloRouter);
routerV2.use('/producto'  , productoRouter);
routerV2.use('/rol'       , rolRouter);
// routerV2.use('/hora'      , horaRouter);
// routerV2.use('/dashboard' , dashboardRouter);


export default routerV2;