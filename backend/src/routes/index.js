import { Router } from 'express';

import userRouter from './user';

const router = Router();

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
});

router.get('/', (req, res) => res.send('API Running'));

export default (app) => {
  app.use(router);
  app.use(userRouter);
};
