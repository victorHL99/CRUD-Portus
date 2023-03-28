import { jest } from '@jest/globals';
import formsService from '../../src/services/formsService';
import formsRepository from '../../src/repositories/formsRepository';

describe('FormsService unit test suite', () => {
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
});
