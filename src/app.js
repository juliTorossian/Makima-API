import express from 'express';
import morgan  from "morgan";
import cors    from 'cors';

import eventoRouter from './modules/evento/evento.router.js';
import usuarioRouter from './modules/usuario/usuario.router.js';
import clienteRouter from './modules/cliente/cliente.router.js';
import productoRouter from './modules/producto/producto.router.js';
import tipoEventoRouter from './modules/tipoEvento/tipoEvento.router.js';
import tareaRouter from './modules/tarea/tarea.router.js';
import moduloRouter from './modules/modulo/modulo.router.js';
import moduloEntorno from './modules/entorno/entorno.router.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors())

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables globales

// Rutas
// app.use(require('./'));
app.use('/api/evento', eventoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/producto', productoRouter);
app.use('/api/tipoEvento', tipoEventoRouter);
app.use('/api/tarea', tareaRouter);
app.use('/api/modulo', moduloRouter);
app.use('/api/entorno', moduloEntorno);

// Archivos Publicos
// app.use(express.static(path.join(__dirname, 'public')));


export default app;