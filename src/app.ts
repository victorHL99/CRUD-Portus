import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import handlerError from './middlewares/handlerError';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handlerError);

export default app;
