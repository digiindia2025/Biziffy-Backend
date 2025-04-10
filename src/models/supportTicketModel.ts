import mongoose from "mongoose";

const supportTicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, enum: ["low", "medium", "high", "urgent"], required: true },
  dateTime: { type: String, required: true },
  status: { type: String, enum: ["open", "close"], default: "open" },
});

export const SupportTicket = mongoose.model("SupportTicket", supportTicketSchema);
