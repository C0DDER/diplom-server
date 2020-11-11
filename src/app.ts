import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../.env') });
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import authRote from './routes/auth';
import deviceRoute from './routes/device';

const { NODE_ENV, PORT } = process.env;

const app = express();
const port = process.env.PORT || 3000;

if (NODE_ENV === 'dev') {
  app.use(cors());
}

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/api/auth', authRote);
app.use('/api/device', deviceRoute);

app.listen(PORT, () => console.log(`server is up and running at port: ${port}`));
