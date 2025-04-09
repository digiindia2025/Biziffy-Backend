import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Deactivated"],
    default: "Active"
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
