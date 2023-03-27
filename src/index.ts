import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port = +process.env.PORT || 9000;

app.listen(port, () => {
  console.log('');
  console.log(`Server is up and running on port ${port}`);
  console.log(`Mode: ${process.env.MODE || 'not defined -> DEV'}`);
  console.log('---------------------------------------');
});
