import { Request, Response } from "express";
import { Advertisement } from "../../models/Advertisement";
import path from "path";
import fs from "fs";

// Create Advertisement
export const createAdvertisement = async (req: Request, res: Response) => {
  try {
    const { title, type, businessCategory, subCategory, childCategory, redirectUrl, status } = req.body;
    const image = req.file?.filename;

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
  } catch (err) {
    res.status(500).json({ error: "Failed to create advertisement", details: err });
  }
};

// Get All Advertisements
export const getAllAdvertisements = async (req: Request, res: Response) => {
  try {
    const ads = await Advertisement.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch advertisements" });
  }
};
