import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import dotenv from "dotenv"
dotenv.config();

export const auth = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "Authorization header missing"});
    }

    const token = authHeader.split(" ")[1];//Extract the token from the header

    if(!token){
        return res.status(401).json({message:"The token is missing"});
    }
    try{
       const decoded = jwt.verify(token.process.env.JWT_SECRET);
       const user = await User.findOne({
        _id: decoded._id,
       "tokens.accessToken": token,//Ensure this matches your user schema
       });

       if(! user){
        return res.status(401).json({message:"User is not found or Token is invalid"});
       }
       req.token = token;
       req.user = user;
       next();
       
    } catch(error){
        console.error("JWT Verification Error:", error); //Log the error for debugging
        res.status(401).json({message:"Auithentication failed", error:error.message});
    }
}