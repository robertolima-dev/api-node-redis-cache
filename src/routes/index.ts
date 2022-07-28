import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';
import userRouter from '../modules/users/routes/users.routes'

const routes = Router();

routes.use('/api/v1/users', userRouter)
routes.use('/api/v1/products', productsRouter)

export default routes;
