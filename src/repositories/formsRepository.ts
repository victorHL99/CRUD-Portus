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

async function getFormsByDate(startDate: string, endDate: string) {
  const formsByDate = await client.forms_Answers.findMany({
    where: {
      created_at: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return formsByDate;
}

const formsRepository = {
  getFormByEmail,
  createForm,
  getFormsByDate,
};

export default formsRepository;
