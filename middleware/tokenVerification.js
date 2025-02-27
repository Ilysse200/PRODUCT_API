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
}