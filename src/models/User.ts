// models/User.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: {
    type: String,
    enum: ["Active", "Inactive", "Deactivated"],
    default: "Active",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
