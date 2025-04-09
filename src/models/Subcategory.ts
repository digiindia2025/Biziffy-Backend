// models/Subcategory.ts
import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

export const Subcategory = mongoose.model("Subcategory", subcategorySchema);
