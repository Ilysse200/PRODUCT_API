import Product from "../models/productModel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateProduct=async(req, res) =>{
    
    try{
        console.log("CreateProduct controller reached");
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("File received:", req.file);

        const{productName, productPrice, productCategory , productDiscount,status}=req.body;
        const newProduct=new Product({productName, productPrice, productCategory , productDiscount, productImage: result.secure_url , status});

        await newProduct.save();
        res.status(201).json({success:true, message:"Product created successfully"})
    }catch(error){
        res.status(500).json({error: false, message:"Server error", error:error.message});

    }
}
export const getAllProducts=async(req, res)=>{
    try{
        const Products = await Product.find();
        res.status(200).json({success:true, Products});
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error", error:error.message });

    }
}

export const getProductById=async(req, res)=>{

    const {id} = req.params;
    try{
        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({success:false, message:"Product not found"});
        }
        res.status(200).json({success:true, product});
        
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error", error:error.message });
    };
}

export const updateProductById = async (req, res) => {
    try{

        const {id} = req.params;

        const updated_data= await Product.findByIdAndUpdate(id, req.body, { new: true });
        if(!updated_data){
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product updated successfully", data: updated_data });

    }catch(error){
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}
export const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id; 

        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

