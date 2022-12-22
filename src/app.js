import express from 'express';
import morgan  from "morgan";
import path    from 'path';

import eventoRouter from './modules/evento/evento.router.js';
import usuarioRouter from './modules/usuario/usuario.router.js';

const app = express();

// Middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables globales

// Rutas
// app.use(require('./'));
app.use('/api/evento', eventoRouter);
app.use('/api/usuario', usuarioRouter);

// Archivos Publicos
// app.use(express.static(path.join(__dirname, 'public')));


export default app;