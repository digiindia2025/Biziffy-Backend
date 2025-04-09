import { Request, Response } from "express";
import Category from "../../models/Category";

// ✅ CREATE CATEGORY
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;
    const icon = req.file ? `/uploads/${req.file.filename}` : "";

    const newCategory = new Category({
      name,
      icon,
      status,
    });

    await newCategory.save();
    res.status(201).json({ message: "Category created successfully", category: newCategory });
  } catch (error) {
    console.error("Create Category Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ GET ALL CATEGORIES
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().sort({ createDate: -1 });
    res.status(200).json(categories);
  } catch (error) {
    console.error("Fetch Categories Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
