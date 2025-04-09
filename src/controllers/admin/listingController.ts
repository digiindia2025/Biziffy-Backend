// src/controller/admin/listingsController.ts
import { Request, Response } from "express";
import Listing from "../../models/listingModel";

export const getAllListings = async (req: Request, res: Response) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
};

export const addListing = async (req: Request, res: Response) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(500).json({ error: "Failed to create listing" });
  }
};
