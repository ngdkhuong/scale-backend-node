import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

import cartRoutes from "./routes/cart.routes.js";

const app = express();

app.use(express.json());

app.use("/api/cart", cartRoutes);

connectDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;