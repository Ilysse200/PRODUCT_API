import express from 'express'

import productRouter from './productRoutes.js';

const mainRouter = express.Router();

mainRouter.use('/products', productRouter)

export default mainRouter;