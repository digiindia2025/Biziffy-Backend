// src/routes/admin/listingRoutes.ts
import express from "express";
import { getAllListings, addListing } from "../../controllers/admin/listingController";

const router = express.Router();

router.get("/", getAllListings);
router.post("/add", addListing);

export default router;
