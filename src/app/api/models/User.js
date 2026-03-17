import mongoose from "mongoose";

// Define Schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    tc: { type: Boolean, required: true },
  },
  { timestamps: true },
);

// Compiling in UserModel

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
