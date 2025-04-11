import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserStatus,
  createUser, // ⬅️ Import createUser function
  
} from "../../controllers/admin/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/status", updateUserStatus);

router.post("/users", createUser); 

export default router;
