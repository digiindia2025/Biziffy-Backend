import express from "express";
import { createDepartment, getAllDepartments } from "../../controllers/admin/departmentController";

const router = express.Router();

router.post("/create", createDepartment);
router.get("/", getAllDepartments);

export default router;
