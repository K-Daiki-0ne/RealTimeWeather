import fastify from 'fastify';
import { router } from './router/index';

const port: number = 4000;

const app: any = fastify();

app.register(router, { prefix: './' })

app.listen(port, (err: any, adress: any) => {
  if(err) {
    console.error('Failed...');
  } else {
    console.log('Success !!')
  }
})