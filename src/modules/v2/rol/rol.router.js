import express from 'express';
import * as controller from './rol.controller.js';

const rolRouter = express.Router();


rolRouter.get(   '/'      , controller.getRoles);
rolRouter.get(   '/:rolId', controller.getRol);
rolRouter.post(  '/'      , controller.insertRol);
rolRouter.put(   '/'      , controller.updateRol);
rolRouter.delete('/:rolId', controller.deleteRol);



export default rolRouter;