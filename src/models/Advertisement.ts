// backend/src/models/Advertisement.ts
import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
}, { timestamps: true });

const Advertisement = mongoose.model("Advertisement", advertisementSchema);
export default Advertisement;
