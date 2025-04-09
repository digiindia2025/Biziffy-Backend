import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "uploads/category-icons");
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
export default upload;
