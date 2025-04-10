import { Request, Response } from "express";
import { Membership } from "../../models/membershipModel";

export const createMembership = async (req: Request, res: Response) => {
  try {
    const newMembership = new Membership(req.body);
    await newMembership.save();
    res.status(201).json({ message: "Membership created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating membership", error });
  }
};

export const getAllMemberships = async (req: Request, res: Response) => {
  try {
    const memberships = await Membership.find();
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching memberships", error });
  }
};
