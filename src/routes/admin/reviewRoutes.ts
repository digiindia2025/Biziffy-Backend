import express from "express";
import { createReview, getAllReviews } from "../../controllers/admin/reviewController";

const router = express.Router();

router.post("/create", createReview);
router.get("/", getAllReviews);

export default router;
