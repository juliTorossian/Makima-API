import express from 'express';
import * as controller from './tipoEvento.controller.js';

const tipoEventoRouter = express.Router();


tipoEventoRouter.get('/', controller.getTipoEventos);
tipoEventoRouter.get('/:tipoEventoId', controller.getTipoEvento);
tipoEventoRouter.post('/', controller.insertTipoEvento);
tipoEventoRouter.put('/', controller.updateTipoEvento);
tipoEventoRouter.delete('/:tipoEventoId', controller.deleteTipoEvento);

tipoEventoRouter.post('/:eventoId/asignarTareas', controller.asignarTareas);



export default tipoEventoRouter;