import express from "express"
import dotenv from "dotenv"
import paymentRoutes from "./routes/payment.routes.js"
import connectDB from "./config/db.js"

const PORT = process.env.PORT || 5004

dotenv.config()
const app = express()
app.use(express.json())

// routes
app.use("/api/payments", paymentRoutes)

connectDB()

app.listen(PORT, () => {
    console.log(`Payment service running on port ${PORT}`);  
});