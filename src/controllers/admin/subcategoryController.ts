import { Request, Response } from "express";

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const { name, category, status } = req.body;
    const imageFile = req.file;

    // Debug logs (optional)
    console.log("Subcategory:", { name, category, status });
    console.log("Image uploaded:", imageFile?.originalname);

    // ✅ Save to DB here (e.g., MongoDB or SQL)
    // Example (mock):
    // await Subcategory.create({ name, category, status, image: imageFile.buffer });

    return res.status(201).json({ message: "Subcategory created successfully." });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    return res.status(500).json({ message: "Server error while creating subcategory." });
  }
};
