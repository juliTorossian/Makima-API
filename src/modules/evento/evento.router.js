import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import * as controller from './evento.controller.js';
import multer from 'multer';

// const upload = multer({ storage: multer.memoryStorage() });

const upload = multer({
    storage: multer.diskStorage({
        destination: path.normalize(`${__dirname}\\..\\..\\temp\\`),
        limits: { fileSize: 10 * 1024 * 1024 }, // Maximo 10Mb
        filename: ( req, file, cb ) => {
            console.log(file);
            console.log(file.type);
            cb( null, `${Date.now()}&${file.originalname}`);
        }
    })
})

const eventoRouter = express.Router();


eventoRouter.get('/', controller.getEventos);
eventoRouter.get('/:eventoId', controller.getEvento);
eventoRouter.post('/', controller.insertEvento);
eventoRouter.put('/', controller.updateEvento);
eventoRouter.delete('/:eventoId', controller.deleteEvento);

eventoRouter.get('/usuario/:usuario', controller.getEventosUsuario);
eventoRouter.get('/rol/:rol', controller.getEventosRol);

eventoRouter.get('/:evento/circular/a', controller.avanzarEvento);
eventoRouter.get('/:evento/circular/r', controller.retrocederEvento);
eventoRouter.get('/:evento/circular/c', controller.cerrarEvento);
eventoRouter.get('/:evento/reasignar', controller.reasignarEvento);
eventoRouter.get('/:evento/estimar', controller.estimarEvento);

eventoRouter.post('/:evento/comentar', upload.single('file'), controller.comentarEvento);
eventoRouter.post('/:evento/comentar/archivo', upload.single('file'), controller.comentarEventoArchivo);
eventoRouter.get('/:evento/comentarios', controller.getComentariosEvento);

eventoRouter.get('/:evento/vida', controller.getVidaEvento);
eventoRouter.get('/:evento/detalle', controller.getEventoDetalle);

eventoRouter.get('/dashboard/tareaPortipo', controller.getTareasPorTipo);


export default eventoRouter;