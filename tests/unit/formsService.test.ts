import { jest } from '@jest/globals';
import formsService from '../../src/services/formsService';
import formsRepository from '../../src/repositories/formsRepository';

describe('CheckEmailExist unit test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
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
