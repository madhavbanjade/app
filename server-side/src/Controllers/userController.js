import { User } from "../model.js";
import bcrypt from "bcrypt";
import { secretKey } from "../Utils/constant.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../Utils/mail.js";

export const signUp = async (req, res, next) => {
  try {
    let data = req.body;
    let password = req.body.password;

    let hashedPassword = await bcrypt.hash(password, 10);
    data = {
      ...data,
      password: hashedPassword,
      isVerifiedEmail: false,
    };

    let user = await User.create(data);

    let token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "1d" });

    // Send verification email with redirect link
    sendMail({
      to: data.email,
      subject: "Verify Email",
      html: `
        <h1>Your account has been created successfully</h1>
        <p>Please click the link below to verify your email:</p>
        <a href="http://localhost:1001/api/verify-email?token=${token}">
          Click here to verify your email
        </a>
      `,
    });

    res.json({
      success: true,
      message: "User signed up successfully. Verification email sent.",
      result: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

// Email Verification API
export const verifyEmail = async (req, res, next) => {
  try {
    let { token } = req.query;
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token is required" });
    }

    let infoObj = jwt.verify(token, secretKey);
    let userId = infoObj._id;

    let user = await User.findByIdAndUpdate(
      userId,
      { isVerifiedEmail: true },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // ✅ After successful verification, redirect to the frontend login page
    res.redirect("http://localhost:5173/login");
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

//signin
export const loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (!email) {
      throw new Error("Email is not verified");
    }

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Password does not match");
    }

    let infoObj = {
      _id: user._id,
    };

    let expiryinfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryinfo);
    res.json({
      success: true,
      message: "User logged in successfully",
      result: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};
