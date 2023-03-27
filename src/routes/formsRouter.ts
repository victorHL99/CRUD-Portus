import { Router } from 'express';
import formsController from '../controllers/formsController';

const formsRouter = Router();

formsRouter.post('/', formsController.create);

export default formsRouter;
