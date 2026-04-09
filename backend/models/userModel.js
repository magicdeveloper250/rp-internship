import mongoose from "mongoose";
import userSchema from "../schemas/schema.js";

const UserModel= mongoose.model("User", userSchema);

export default UserModel;