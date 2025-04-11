import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserStatus,
} from "../../controllers/admin/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/status", updateUserStatus);

export default router;
