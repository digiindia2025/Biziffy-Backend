import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema({
  title: String,
  type: String,
  businessCategory: String,
  subCategory: String,
  childCategory: String,
  redirectUrl: String,
  status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" },
  image: String, // store image filename or path
}, { timestamps: true });

export const Advertisement = mongoose.model("Advertisement", advertisementSchema);
