import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import handlerError from './middlewares/handlerError';
import routes from './routes';
import limiter from './middlewares/rateLimit';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(limiter);
app.use(handlerError);

export default app;
