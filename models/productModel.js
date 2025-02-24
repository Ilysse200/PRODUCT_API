import mongoose from "mongoose";
const {model, Schema} = mongoose

// Define the schema for the User model
const productSchema = new Schema({

    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    productDiscount:{
        type:Number,
        default:0
    },
    productImage:{
        type:String,
        required:true
    }
})
const product = model("product", productSchema);
export default product;