import express from 'express';
import { router } from './router/index';

const port: number = 4000;

const app: any = express();

app.use('./', router);

app.listen(port, () => console.log('success'));