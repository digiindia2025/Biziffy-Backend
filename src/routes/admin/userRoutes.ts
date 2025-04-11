import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserStatus,
  createUser,
  toggleUserStatus, // ✅ Import this function
} from "../../controllers/admin/userController";

const router = express.Router();

// Routes
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/status", updateUserStatus);
router.patch("/users/:id/toggle-status", toggleUserStatus); // ✅ Clean and consistent path

export default router;
