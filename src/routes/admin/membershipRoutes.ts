import express from "express";
import {
  createMembership,
  getAllMemberships,
} from "../../controllers/admin/membershipController";

const router = express.Router();

router.post("/", createMembership);
router.get("/", getAllMemberships);

export default router;
