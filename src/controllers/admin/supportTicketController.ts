import { Request, Response } from "express";
import SupportTicket from "../../models/SupportTicket";

export const getSupportTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await SupportTicket.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching support tickets", error });
  }
};

export const createSupportTicket = async (req: Request, res: Response) => {
  try {
    const { title, priority, dateTime, status } = req.body;

    const newTicket = new SupportTicket({ title, priority, dateTime, status });
    await newTicket.save();

    res.status(201).json({ success: true, data: newTicket });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating support ticket", error });
  }
};
