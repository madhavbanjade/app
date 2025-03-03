import { Router } from "express";
import {
  loginUser,
  signUp,
  verifyEmail,
} from "../Controllers/userController.js";

let userRouter = Router();

userRouter.route("/signup").post(signUp);
userRouter.route("/verify-email").get(verifyEmail);
userRouter.route("/login").post(loginUser);

export default userRouter;
