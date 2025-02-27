import User from '../models/userModel.js'

export const Admin = (req, res, next)=>{
    if(req.userRole!=="admin"){
        return res.status(403).json({message:"Access denied contact admin please!"});
    }
    next();
};