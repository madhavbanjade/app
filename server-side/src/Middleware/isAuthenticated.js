import jwt from "jsonwebtoken";
import { secretKey } from "../Utils/constant.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.query;
  try {
    let decode = await jwt.verify(token, secretKey);
    const userId = decode._id;
    res.status(200).json({
      message: "verifed success",
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid verification",
    });
  }
};
