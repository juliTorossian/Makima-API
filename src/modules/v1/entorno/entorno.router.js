import express from 'express';
import * as controller from './entorno.controller.js';

const entornoRouter = express.Router();


entornoRouter.get(   '/'           , controller.getEntornos);
entornoRouter.get(   '/:entornoId' , controller.getEntorno);
entornoRouter.post(  '/'           , controller.insertEntorno);
entornoRouter.put(   '/'           , controller.updateEntorno);
entornoRouter.delete('/:entornoId' , controller.deleteEntorno);


export default entornoRouter;