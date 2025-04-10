// server.ts
import dotenv from "dotenv";
dotenv.config(); // ✅ Load env variables first

import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "../config/db";

import advertisementRoutes from "./routes/admin/advertisementRoutes";
import childCategoryRoutes from "./routes/admin/childCategoryRoutes"
import categoryRoutes from "./routes/admin/categoryRoutes";
import subcategoryRoutes from "./routes/admin/subcategoryRoutes";
import listingRoutes from "./routes/admin/listingRoutes";
import userRoutes from "./routes/admin/userRoutes";
import deactivateUserRoutes from "./routes/admin/deactivateUserRoute";
import contactRoutes from "./routes/admin/contactRoutes";
import departmentRoutes from "./routes/admin/departmentRoutes";
import supportTicketRoutes from "./routes/admin/supportTicketRoutes";
import dashboardRoutes from "./routes/admin/dashboardRoutes";
import enquiryRoutes from "./routes/admin/enquiryRoutes";
import linkRoutes from "./routes/admin/linkRoutes";
import reviewRoutes from "./routes/admin/reviewRoutes";
import membershipRoutes from "./routes/admin/membershipRoutes";
const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static image files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/admin/child-categories", childCategoryRoutes);
app.use("/api", categoryRoutes);
app.use("/api/admin/subcategories", subcategoryRoutes);
app.use("/api/admin", listingRoutes); // 👈 important!
app.use("/api/admin", userRoutes);
app.use("/api/admin", deactivateUserRoutes);
app.use("/api/admin/contacts", contactRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/admin", supportTicketRoutes);
app.use("/api/admin/dashboard", dashboardRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/links", linkRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/memberships", membershipRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
