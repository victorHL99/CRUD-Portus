import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidate';
import formsController from '../controllers/formsController';
import formsSchema from '../schemas/formsSchema';

const formsRouter = Router();

formsRouter.post(
  '/',
  validateSchema(formsSchema.create),
  formsController.create,
);

formsRouter.get('/list', formsController.list);

export default formsRouter;
