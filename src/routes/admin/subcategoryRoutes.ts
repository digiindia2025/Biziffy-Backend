import express from "express";
import multer from "multer";
import { createSubcategory , getAllSubcategories } from "../../controllers/admin/subcategoryController";

const router = express.Router();

// Configure multer for image uploads
const storage = multer.memoryStorage(); // or use diskStorage if saving locally
const upload = multer({ storage });

// POST /api/admin/subcategories/create
router.post("/create", upload.single("image"), createSubcategory);
router.get("/", getAllSubcategories);

export default router;
