import { Request, Response } from "express";
import Advertisement from "../../models/Advertisement"; // use default import if applicable
import path from "path";
import fs from "fs";

// Create Advertisement
export const createAdvertisement = async (req: Request, res: Response) => {
  try {
    const { title, type, businessCategory, subCategory, childCategory, redirectUrl, status } = req.body;
    const image = req.file?.filename;

    if (!title || !type || !businessCategory || !status || !image) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const newAd = new Advertisement({
      title,
      type,
      businessCategory,
      subCategory,
      childCategory,
      redirectUrl,
      status,
      image,
    });

    const savedAd = await newAd.save();
    res.status(201).json(savedAd);
  } catch (err: any) {
    console.error("Error creating advertisement:", err);
    res.status(500).json({ error: "Failed to create advertisement", details: err.message || err });
  }
};

// Get All Advertisements
export const getAllAdvertisements = async (req: Request, res: Response) => {
  try {
    const ads = await Advertisement.find().sort({ createdAt: -1 });
    res.status(200).json(ads);
  } catch (err: any) {
    console.error("Error fetching advertisements:", err);
    res.status(500).json({ error: "Failed to fetch advertisements", details: err.message || err });
  }
};
