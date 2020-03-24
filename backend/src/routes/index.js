import { Router } from 'express';

import ongRouter from './ong';
import incidentRouter from './incident';
import authRouter from './auth';

const router = Router();

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  return next();
});

router.get('/', (req, res) => res.send('API Running'));

export default (app) => {
  app.use(router);
  app.use(ongRouter);
  app.use(incidentRouter);
  app.use(authRouter);
};
