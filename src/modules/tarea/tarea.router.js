import express from 'express';
import * as controller from './tarea.controller.js';

const tareaRouter = express.Router();

tareaRouter.get('/', controller.getTareas);
tareaRouter.get('/:tareaId', controller.getTarea);
tareaRouter.post('/', controller.insertTarea);
tareaRouter.put('/', controller.updateTarea);
tareaRouter.delete('/:tareaId', controller.deleteTarea);

tareaRouter.get('/rol/:rol', controller.getTareasRol);

tareaRouter.get('/evento/:eventoId', controller.getTareasEvento);
// tareaRouter.get('/evento/no/:eventoId', controller.getTareasNoEvento);

export default tareaRouter;