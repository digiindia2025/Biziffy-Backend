import { Request, Response } from "express";
import { SupportTicket } from "../../models/supportTicketModel";

export const createSupportTicket = async (req: Request, res: Response) => {
  try {
    const newTicket = new SupportTicket(req.body);
    await newTicket.save();
    res.status(201).json({ success: true, data: newTicket });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to create ticket" });
  }
};

export const getAllSupportTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await SupportTicket.find().sort({ dateTime: -1 });
    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch tickets" });
  }
};
