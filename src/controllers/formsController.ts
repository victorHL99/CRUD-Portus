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

async function listForms(request: Request, response: Response) {
  const { start, end } = request.query as {
    start: string;
    end: string;
  };

  const { startDate, endDate } = await formsService.formatDate(start, end);

  await formsService.getFormsByDate(startDate, endDate);

  return response.status(200).json({ message: 'ok' });
}

const formsController = {
  create: createForm,
  list: listForms,
};

export default formsController;
