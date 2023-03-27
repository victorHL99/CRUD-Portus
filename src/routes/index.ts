import { Router } from 'express';
import formsRouter from './formsRouter';

const routes = Router();

routes.use('/forms', formsRouter);

export default routes;
