import mongoose from "mongoose";
import userSchema from "./Schema/user.js";
import contactSchema from "./Schema/contact.js";

export const User = mongoose.model("User", userSchema);
export const Contact = mongoose.model("Contact", contactSchema);
