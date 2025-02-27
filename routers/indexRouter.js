import express from 'express'

import productRouter from './productRoutes.js';
import userRouter from './userPath.js';

const indexRouter = express.Router();


indexRouter.use('/products', productRouter)
indexRouter.use('/users',userRouter)
export default indexRouter;