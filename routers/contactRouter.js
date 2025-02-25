import express from "express";

import contactRouter from "../routers/contactPath.js"

const mainRouter = express.Router();


mainRouter.use('/contact', contactRouter)

export default mainRouter;