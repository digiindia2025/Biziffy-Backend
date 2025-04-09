import express from "express";
import { getDeactivatedUsers } from "../../controllers/admin/deactivateUserController";

const router = express.Router();

router.get("/users/deactivated", getDeactivatedUsers);

export default router;
