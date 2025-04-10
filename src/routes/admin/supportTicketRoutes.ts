import express from "express";
import { getSupportTickets, createSupportTicket } from "../../controllers/admin/supportTicketController";

const router = express.Router();

router.get("/support-tickets", getSupportTickets);
router.post("/support-tickets", createSupportTicket);

export default router;
