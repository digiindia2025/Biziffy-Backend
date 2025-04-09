import { Request, Response } from "express";

// Dummy in-memory store for example
// Replace this with actual DB model (e.g., MongoDB model)
let subcategoryStore: any[] = [];

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const { name, category, status } = req.body;
    const imageFile = req.file;

    // Debug logs (optional)
    console.log("Subcategory:", { name, category, status });
    console.log("Image uploaded:", imageFile?.originalname);

    // 🧠 Simulate saving to DB
    const newSubcategory = {
      id: Date.now(),
      name,
      category,
      status,
      image: imageFile?.originalname || null,
    };

    subcategoryStore.push(newSubcategory);

    return res.status(201).json({ message: "Subcategory created successfully." });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    return res.status(500).json({ message: "Server error while creating subcategory." });
  }
};

export const getAllSubcategories = async (req: Request, res: Response) => {
  try {
    // 🧠 Fetch all subcategories
    // Replace this with DB query in real app
    return res.status(200).json(subcategoryStore);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return res.status(500).json({ message: "Server error while fetching subcategories." });
  }
};
