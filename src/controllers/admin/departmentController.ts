import { Request, Response } from "express";
import { Department } from "../../models/Department";

// Create new department
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { department, status } = req.body;
    const newDept = new Department({ department, status });
    await newDept.save();
    res.status(201).json(newDept);
  } catch (error) {
    res.status(500).json({ message: "Failed to create department", error });
  }
};

// Get all departments
export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.find().sort({ createdAt: -1 });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch departments", error });
  }
};
