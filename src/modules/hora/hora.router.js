import express from 'express';
import * as controller from './hora.controller.js';

const horaRouter = express.Router();


horaRouter.get(   '/'          , controller.getHoras);
horaRouter.get(   '/:horaId'   , controller.getHora);
horaRouter.post(  '/'          , controller.insertHora);
horaRouter.put(   '/'          , controller.updateHora);
horaRouter.delete('/:horaId'   , controller.deleteHora);

export default horaRouter;