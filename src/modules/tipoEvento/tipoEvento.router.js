import express from 'express';
import * as controller from './tipoEvento.controller.js';

const tipoEventoRouter = express.Router();


tipoEventoRouter.get('/', controller.getTipoEventos);
// tipoEventoRouter.get('/:eventoId', controller.getEvento);
tipoEventoRouter.post('/', controller.insertTipoEvento);
tipoEventoRouter.put('/', controller.updateTipoEvento);
tipoEventoRouter.delete('/:tipoEventoId', controller.deleteTipoEvento);

// tipoEventoRouter.get('/usuario/:usuario', controller.getEventosUsuario);
// tipoEventoRouter.get('/rol/:rol', controller.getEventosRol);

// tipoEventoRouter.get('/:evento/circular/a', controller.avanzarEvento);
// tipoEventoRouter.get('/:evento/circular/r', controller.retrocederEvento);
// tipoEventoRouter.get('/:evento/reasignar', controller.reasignarEvento);
// tipoEventoRouter.get('/:evento/estimar', controller.estimarEvento);


export default tipoEventoRouter;