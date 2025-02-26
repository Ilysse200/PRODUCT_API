import User from '../models/userModel.js'

export const Admin = (req, res, next)=>{
    if(req.User.userRole!=="admin"){
        return res.status(400).json({message:"Access denied contact admin please!"});
    }
    next();
};