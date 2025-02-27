import express from "express";
import upload from "../middleware/multer.js";
import {CreateBlog} from "../controllers/blogController.js"
const blogRoute = express.Router();

blogRoute.post('/createBlog',upload.single('blogImage'),CreateBlog);
export default blogRoute;