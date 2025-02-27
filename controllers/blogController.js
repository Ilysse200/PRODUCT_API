import Blog from "../models/blogModel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateBlog = async (req, res) => {

    try{

        //upload image on cloudinary

        const blogUpload = await cloudinary.uploader.upload(req.file.path)

        const {title, description, date} = req.body;
        const blog = new blog({title,description,date, blogImage:blogUpload.secure_url})
        await blog.save();
        res.status(201).json({success:true, message:"Blog created successfully"})
        
    }catch(err){
        res.status(500).json({success:false, message:"Server error"})
    }
}