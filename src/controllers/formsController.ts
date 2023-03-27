import { Request, Response } from 'express';
import { Forms } from '../types/formsInterface';
import formsService from '../services/formsService';

async function createForm(request: Request, response: Response) {
  const { name, email, cpf, phone } = request.body as Forms;

  await formsService.checkEmailExist(email);

  const form = {
    name,
    email,
    cpf,
    phone,
  } as Forms;

  await formsService.createForm(form);

  return response
    .status(201)
    .json({ message: 'Formulário criado com sucesso' });
}

const formsController = {
  create: createForm,
};

export default formsController;
