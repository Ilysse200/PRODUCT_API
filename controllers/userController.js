import User from "../models/userModel";
import bcrypt from "bcryptjs";
import {generateAccessToken} from "../utils/tokenGenerate.js"
export const Register = async(req,res)=>{

    try{
        const { userName, userPassword, userEmail, userRole } = req.body;

    //Check if the email exists

    const existingUser = await User.findOne({ userEmail });

    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(userPassword, 10); //10 is the salt rounds
    const user = new User({ userName, userPassword: hashedPassword, userEmail, userRole })
    user.tokens.accessToken = generateAccessToken(user);

    await user.save();
    res.status(201).json({ success: true, message: "User registered successfully", 
        user:{
            ...user.toObject(),
            tokens:{
                accessToken:user.tokens.accessToken,
            }
        } });
    }catch(error){
        res.status(500).json({error: error.message});
    }
    }
