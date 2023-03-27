import Joi from 'joi';
import { Forms } from '../types/formsInterface';
import checkCpfIsValid from '../utils/checkCpfIsValid';

const createForm = Joi.object<Forms>({
  name: Joi.string().required().messages({
    'string.empty': 'O campo de nome não pode estar vazio',
    'any.required': 'O campo de nome é obrigatório',
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'string.email': 'O email fornecido é inválido',
    'string.empty': 'O campo de email não pode estar vazio',
    'any.required': 'O campo de email é obrigatório',
  }),
  cpf: Joi.string()
    .required()
    .length(11)
    .pattern(/^\d+$/)
    .custom((value, helpers) => {
      if (!checkCpfIsValid(value)) {
        return helpers.error('custom.invalidCpf');
      }
      return value;
    })
    .messages({
      'string.empty': 'O campo de CPF não pode estar vazio',
      'string.length': 'O campo de CPF deve ter exatamente 11 dígitos',
      'string.pattern.base': 'O campo de CPF deve conter apenas dígitos',
      'any.required': 'O campo de CPF é obrigatório',
      'custom.invalidCpf': 'O CPF fornecido é inválido',
    }),
  phone: Joi.string()
    .required()
    .pattern(/^\([0-9]{2}\)[0-9][0-9]{4}\-[0-9]{4}$/)
    .messages({
      'string.pattern.base': 'O número de telefone fornecido é inválido',
      'string.empty': 'O campo de telefone não pode estar vazio',
      'any.required': 'O campo de telefone é obrigatório',
    }),
});

const formsSchema = {
  create: createForm,
};

export default formsSchema;
