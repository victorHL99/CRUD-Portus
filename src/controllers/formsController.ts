import { Request, Response } from 'express';

async function createForm(request: Request, response: Response) {
  // ...
}

const formsController = {
  create: createForm,
};

export default formsController;
