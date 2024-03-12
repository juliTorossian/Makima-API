import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';
import helmet  from 'helmet';

import routerV1 from './router/router.v1.js';
import { errorHandler, logErrors, wrapErrors } from './helper/middleware/errorMiddleware.js';
import { notFoundMiddleware } from './helper/middleware/notFoundMiddleware.js';

const ACCEPTED_ORIGINS =[
    'http://localhost:4000',
    'http://localhost:4200',
    'http://pandora:4000',
    'http://pandora:8080',
    'http://192.168.123.126:4000',
    'http://192.168.123.126:8000',
]

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors({
    origin: (origin, callback) => {
        if (ACCEPTED_ORIGINS.includes(origin)){
            return callback(null, true);
        }
        if (!origin){
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"))
    },
    credentials: true,
    methods: ['GET','PATCH','PUT','POST','DELETE','OPTIONS']
}));
app.use(helmet());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Variables globales

// Rutas
app.use('/api/v1', routerV1);

// notFound
app.use(notFoundMiddleware)

// Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Archivos Publicos
// app.use(express.static(path.join(__dirname, 'public')));


export default app;