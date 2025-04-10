import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const Department = mongoose.model("Department", departmentSchema);
