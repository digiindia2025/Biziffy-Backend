import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  title: { type: String },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
