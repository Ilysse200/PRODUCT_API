import jwt from "jsonwebtoken"; // this library helps us generate token
import dotenv from "dotenv";

dotenv.config();

export const generateAccessToken = (user) => {
  return jwt.sign(
    { _id: user._id, userEmail: user.userEmail },
    process.env.JWT_SECRET,
    { expiresIn: "4h" }
  );
};

// export const generateRefreshToken = (user) => {
//   return jwt.sign(
//     { _id: user._id, email: user.email },
//     process.env.JWT_REFRESH_SECRET,
//     { expiresIn: "7d" }
//   );
// };