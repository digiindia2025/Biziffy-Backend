import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  userDetails: {
    name: String,
    email: String,
    phone: String,
  },
  membershipDetails: {
    title: String,
    description: String,
  },
  paymentGateway: String,
  paymentStatus: String,
  status: String,
  purchaseDate: String,
  expireDate: String,
});

export const Membership = mongoose.model("Membership", membershipSchema);
