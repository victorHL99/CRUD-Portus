import Joi from 'joi';
import { Forms } from '../types/formsInterface';

const createForm = Joi.object<Forms>({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'string.email': 'O email fornecido é inválido',
    'string.empty': 'O campo de email não pode estar vazio',
    'any.required': 'O campo de email é obrigatório',
  }),
  cpf: Joi.string().required(),
  phone: Joi.string().required(),
});

const formsSchema = {
  create: createForm,
};
