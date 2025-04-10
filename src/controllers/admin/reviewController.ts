import { Request, Response } from "express";
import Review from "../../models/reviewModel";

// Create review
export const createReview = async (req: Request, res: Response) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review created", review });
  } catch (err) {
    res.status(500).json({ message: "Failed to create review", error: err });
  }
};

// Get all reviews
export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
};
