import mongoose from "mongoose";


const {model, Schema} =  new Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userRole:{
        type:String,
        default: user,
        enum:["user", "admin"],
        required:true
        

    }
})

const User = model("User", userSchema);
export default User;