import express from "express";
import {CreateBlog} from "../controllers/blogController.js"
const blogRoute = express.Router();

blogRoute.post('/createBlog',CreateBlog);
