import express from 'express';
import morgan  from "morgan";
import path    from 'path';

import eventoRouter from './modules/evento/evento.router.js';

const app = express();

// Middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables globales

// Rutas
// app.use(require('./'));
app.use('/api/evento', eventoRouter);

// Archivos Publicos
// app.use(express.static(path.join(__dirname, 'public')));


export default app;