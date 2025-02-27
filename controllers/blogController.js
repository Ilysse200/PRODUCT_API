import Blog from "../models/blogModel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateBlog = async (req, res) => {

    try{

        //upload image on cloudinary

        const blogUpload = await cloudinary.uploader.upload(req.file.path)

        const {title, description, date} = req.body;
        if (!title || !description || !blogImage) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // ✅ Ensure the date is correctly formatted
        let parsedDate = date ? new Date(date) : new Date();
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD' });
        }
        const blog = new blog({title,description,date:parsedDate, blogImage:blogUpload.secure_url})
        await blog.save();
        res.status(201).json({success:true, message:"Blog created successfully"})
        
    }catch(err){
        res.status(500).json({success:false, message:"Server error"})
    }
}