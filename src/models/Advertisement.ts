// models/Advertisement.ts

import mongoose from "mongoose";

const AdvertisementSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    businessCategory: String,
    subCategory: String,
    childCategory: String,
    redirectUrl: String,
    image: String,
    status: {
      type: String,
      enum: ["Active", "Inactive"], // <-- allow capitalized values
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Advertisement", AdvertisementSchema);
