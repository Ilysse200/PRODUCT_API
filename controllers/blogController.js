import Blog from "../models/blogModel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateBlog = async (req, res) => {

    try{

        //upload image on cloudinary

        const blogUpload = await cloudinary.uploader.upload(req.file.path)

        const {title, description, date} = req.body;
        const blog = new Blog({title,description,date, blogImage:blogUpload.secure_url})
        await blog.save();
        res.status(201).json({success:true, message:"Blog created successfully"})
        
    }catch(err){
        res.status(500).json({success:false, message:"Server error"})
    }
}
export const getAllBlogs=async(req, res)=>{
    try{
        const blog = await Blog.find();
        res.status(200).json({success:true, blog});
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error", error:error.message });

    }
}
export const getBlogsById=async(req, res)=>{
    try{
        const{id}=req.params;
        const blog = await Blog.findById(id);
        if(!blog){
            return res.status(404).json({success:false, message:"Blog not found"})
        }
        res.status(200).json({success:true, blog})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteBlogsById=async(req, res)=>{
    try{
        const{id}=req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if(!blog){
            return res.status(404).json({success:false, message:"Blog not found"})
        }
        res.status(200).json({success:true, message:"Blog deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const updateBlogs=async(req, res)=>{
    try{
        const{id}=req.params;
        const blog = await Blog.findByIdAndUpdate(id, req.body);
        if(!blog){
            return res.status(404).json({success:false, message:"Blog not found"})
        }
        res.status(200).json({success:true, message:"Blog updated successfully"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}