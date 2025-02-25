import express from 'express'

import productRouter from './productRoutes.js';

const indexRouter = express.Router();


indexRouter.use('/products', productRouter)

export default indexRouter;