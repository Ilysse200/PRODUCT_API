import express from "express";
import upload from "../middleware/multer.js";
import {CreateBlog, getAllBlogs, getBlogsById, deleteBlogsById, updateBlogs} from "../controllers/blogController.js"
const blogRoute = express.Router();

blogRoute.post('/createBlog',upload.single('blogImage'),CreateBlog);
blogRoute.get('/getAllBlogs',getAllBlogs);
blogRoute.get('/getBlogById/:id',getBlogsById);
blogRoute.delete('/deleteBlogById/:id',deleteBlogsById);
blogRoute.put('/updateBlog/:id',updateBlogs);
export default blogRoute;