import express from 'express';
import * as controller from './modulo.controller.js';

const moduloRouter = express.Router();


moduloRouter.get(   '/'          , controller.getModulos);
moduloRouter.get(   '/:moduloId' , controller.getModulo);
moduloRouter.post(  '/'          , controller.insertModulo);
moduloRouter.put(   '/'          , controller.updateModulo);
moduloRouter.delete('/:moduloId' , controller.deleteModulo);

moduloRouter.get('/:padreId', controller.getModulosPadre);
moduloRouter.get('/busqueda/bus', controller.getModulosBusqueda);


export default moduloRouter;