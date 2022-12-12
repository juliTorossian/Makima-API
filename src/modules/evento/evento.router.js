import express from 'express';
import { eventos } from './evento.controller.js';

const eventoRouter = express.Router();


eventoRouter.get('/', eventos);

export default eventoRouter;