import express from "express";

import contactRouter from "../routers/contactPath.js"
import userRouter from "./userPath.js";

const mainRouter = express.Router();


mainRouter.use('/contact', contactRouter)
mainRouter.use('/user',userRouter);
export default mainRouter;