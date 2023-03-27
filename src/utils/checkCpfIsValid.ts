export default function checkCpfIsValid(cpf) {
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf[i]) * (10 - i);
  }

  let result = 11 - (sum % 11);
  let firstNumberVerification = result >= 10 ? 0 : result;

  sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf[i]) * (11 - i);
  }

  result = 11 - (sum % 11);
  let secondNumberVerification = result >= 10 ? 0 : result;

  if (firstNumberVerification != cpf[9] || secondNumberVerification != cpf[10])
    return false;

  return true;
}
