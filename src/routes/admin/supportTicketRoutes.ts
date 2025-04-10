import express from "express";
import { createSupportTicket, getAllSupportTickets } from "../../controllers/admin/supportTicketController";

const router = express.Router();

router.post("/support-tickets", createSupportTicket);
router.get("/support-tickets", getAllSupportTickets);

export default router;
