import express from "express";
import multer from "multer";
import path from "path";
import {
  createCategory,
  getAllCategories,
} from "../../controllers/admin/categoryController";

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST /api/categories
router.post("/", upload.single("icon"), createCategory);

// GET /api/categories
router.get("/", getAllCategories);

export default router;
