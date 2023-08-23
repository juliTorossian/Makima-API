import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';

import routerV1 from './router/router.v1.js';

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