import express from "express";
import { getAllUsers, addUser } from "../../controllers/admin/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", addUser);

export default router;
