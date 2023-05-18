import express from 'express';
import morgan  from "morgan";
import cors    from 'cors';

import routerV1 from './router/router.v1.js';

// import eventoRouter     from './modules/evento/v1/evento.router.js';
// import usuarioRouter    from './modules/usuario/usuario.router.js';
// import clienteRouter    from './modules/cliente/cliente.router.js';
// import productoRouter   from './modules/producto/producto.router.js';
// import tipoEventoRouter from './modules/tipoEvento/tipoEvento.router.js';
// import tareaRouter      from './modules/tarea/tarea.router.js';
// import moduloRouter     from './modules/modulo/modulo.router.js';
// import entornoRouter    from './modules/entorno/entorno.router.js';
// import rolRouter        from './modules/rol/rol.router.js';
// import dashboardRouter  from './modules/dashboard/dashboard.router.js';
// import horaRouter       from './modules/hora/hora.router.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables globales

// Rutas
app.use('/api/v1', routerV1);

// Archivos Publicos
// app.use(express.static(path.join(__dirname, 'public')));


export default app;