import express from "express";
import multer from "multer";
import path from "path";
import { createAdvertisement, getAllAdvertisements } from "../../controllers/admin/advertisementController";

const router = express.Router();

// Setup multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("image"), createAdvertisement);
router.get("/", getAllAdvertisements);

export default router;
