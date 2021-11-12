import { Router } from 'express';
import userRouter from '../modules/users/routes/users.routes'

const routes = Router();

routes.use('/api/v1/users', userRouter);

export default routes;
