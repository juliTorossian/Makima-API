import express from 'express';
import * as controller from './dashboard.controller.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/ultimosMovimientos', controller.getUltimosMovimientos);

export default dashboardRouter;