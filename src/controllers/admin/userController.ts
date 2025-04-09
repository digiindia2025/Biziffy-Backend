import { Request, Response } from "express";
import User from "../../models/userModel";

// GET all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};

// POST add user
export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, status } = req.body;
    const newUser = new User({ name, email, phone, status });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};
