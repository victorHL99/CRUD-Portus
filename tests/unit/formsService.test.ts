import { jest } from '@jest/globals';
import formsService from '../../src/services/formsService';
import formsRepository from '../../src/repositories/formsRepository';
import transformDate from 'utils/transformDate';

describe('CheckEmailExist unit test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should return null if email is not registered', async () => {
    const email = 'testeUnity@teste.com.br';
    jest.spyOn(formsRepository, 'getFormByEmail').mockResolvedValueOnce(null);

    const resultSearchEmail = await formsService.checkEmailExist(email);

    expect(resultSearchEmail).toBeNull();
    expect(formsRepository.getFormByEmail).toHaveBeenCalledTimes(1);
    expect(formsRepository.getFormByEmail).toHaveBeenCalledWith(email);
  });

  it('should return message "O email fornecido já possui um formulário registrado" if email is registered', async () => {
    const formReturned = {
      id: 1,
      name: 'Victor Hugo',
      email: 'victor@teste.com.br',
      cpf: '53728531073',
      phone: '(74)99999-8080',
      created_at: new Date(),
    };

    jest
      .spyOn(formsRepository, 'getFormByEmail')
      .mockImplementationOnce((): any => {
        return formReturned;
      });

    try {
      await formsService.checkEmailExist(formReturned.email);
    } catch (error) {
      expect(error.type).toBe('unprocessable_entity');
      expect(error.message).toBe(
        'O email fornecido já possui um formulário registrado',
      );
    }

    expect(formsRepository.getFormByEmail).toHaveBeenCalledTimes(1);
  });
});

describe('CreateForm unit test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should call createForm from formsRepository', async () => {
    const form = {
      name: 'Victor Hugo',
      email: 'victor@teste.com.br',
      cpf: '53728531073',
      phone: '(74)99999-8080',
      created_at: new Date(),
    };

    jest.spyOn(formsRepository, 'createForm').mockResolvedValueOnce(null);

    await formsService.createForm(form);

    expect(formsRepository.createForm).toHaveBeenCalledTimes(1);
  });
});

describe('FormatDate unit test suite', () => {
  it('should return one object that contains {startDate, endDate} if startDate is less than endDate', async () => {
    const initialDate = '28-01-2023';
    const finalDate = '31-01-2023';

    const startDate = transformDate(initialDate);
    const endDate = transformDate(finalDate);

    const result = await formsService.formatDate(initialDate, finalDate);

    expect(result).toEqual({ startDate, endDate });
  });

  it('should return message "A data inicial deve ser menor que a data final" if startDate is greater than endDate', async () => {
    const initialDate = '31-01-2023';
    const finalDate = '28-01-2023';

    try {
      await formsService.formatDate(initialDate, finalDate);
    } catch (error) {
      expect(error.type).toBe('unprocessable_entity');
      expect(error.message).toBe(
        'A data inicial deve ser menor que a data final',
      );
    }
  });
});
