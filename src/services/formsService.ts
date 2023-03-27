import formsRepository from '../repositories/formsRepository';
import { Forms } from '../types/formsInterface';
import transformDate from '../utils/transformDate';

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

async function formatDate(initialDate: string, finalDate: string) {
  const startDate = transformDate(initialDate);
  const endDate = transformDate(finalDate);

  if (startDate > endDate) {
    throw {
      type: 'unprocessable_entity',
      message: 'A data inicial deve ser menor que a data final',
    };
  }

  return { startDate, endDate };
}

async function getFormsByDate(startDate: string, endDate: string) {
  await formsRepository.getFormsByDate(startDate, endDate);
}
const formsService = {
  checkEmailExist,
  createForm,
  formatDate,
  getFormsByDate,
};

export default formsService;
