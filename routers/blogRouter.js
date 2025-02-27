import express from "express";
import blogRoute from "./blogPath.js";

const startingRouter = express.Router();
startingRouter.use('/blog',blogRoute);
export default startingRouter;