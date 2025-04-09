import express from "express";
import multer from "multer";
import { createCategory, getAllCategories } from "../../controllers/admin/categoryController";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/categories", upload.single("icon"), createCategory);
router.get("/categories", getAllCategories); // 👈 Add this

export default router;
