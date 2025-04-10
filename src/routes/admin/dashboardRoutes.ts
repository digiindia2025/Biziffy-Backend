import express from "express";
import { getDashboardCounts } from "../../controllers/admin/dashboardController";

const router = express.Router();

router.get("/counts", getDashboardCounts);

export default router;
