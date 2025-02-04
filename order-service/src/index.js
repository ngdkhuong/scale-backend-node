import express from "express";
import dotenv from "dotenv";
import orderRoutes from "./routes/order.routes.js";
import connectDB from "./config/db.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

connectDB()

// Use routes
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {  
    console.log(`Order service running on port ${PORT}`);
});