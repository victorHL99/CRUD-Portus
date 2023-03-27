import client from '../config/database';

async function getFormByEmail(email: string) {
  const formByEmail = await client.forms_Answers.findFirst({
    where: {
      email: email,
    },
  });

  return formByEmail;
}

async function createForm(form: any) {
  await client.forms_Answers.create({
    data: form,
  });
}

const formsRepository = {
  getFormByEmail,
  createForm,
};

export default formsRepository;
