import { Request, Response } from "express";
import User from "../../models/userModel"; // adjust path if needed

// GET /api/admin/users/deactivated
export const getDeactivatedUsers = async (req: Request, res: Response) => {
  try {
    const deactivatedUsers = await User.find({ status: "Deactivated" });
    res.status(200).json(deactivatedUsers);
  } catch (error) {
    console.error("Error fetching deactivated users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
