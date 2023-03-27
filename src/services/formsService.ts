import formsRepository from '../repositories/formsRepository';
import { Forms } from '../types/formsInterface';

async function checkEmailExist(email: string) {
  const emailForm = await formsRepository.getFormByEmail(email);

  if (emailForm) {
    throw {
      type: 'unprocessable_entity',
      message: 'O email fornecido já possui um formulário registrado',
    };
  }

  return null;
}

async function createForm(form: Forms) {
  await formsRepository.createForm(form);
}

const formsService = {
  checkEmailExist,
  createForm,
};

export default formsService;
