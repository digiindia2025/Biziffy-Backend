import { Request, Response } from "express";

// In-memory category storage (can be replaced with DB later)
let categories: any[] = [];

export const createCategory = (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;
    const icon = req.file ? req.file.filename : null;

    if (!name || !status || !icon) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCategory = {
      id: Date.now(),
      name,
      iconUrl: `http://localhost:5000/uploads/${icon}`,
      status,
    };

    categories.push(newCategory);

    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error("Create category error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCategories = (req: Request, res: Response) => {
  try {
    res.status(200).json(categories);
  } catch (error) {
    console.error("Get categories error:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};
