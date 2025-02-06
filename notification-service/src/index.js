import express from "express"
import dotenv from "dotenv"
import notificationRoutes from "./routes/notification.js"

dotenv.config()

const app = express()
app.use(express.json())

// routes
app.use("/api/notification", notificationRoutes)

const PORT = process.env.PORT || 3005

app.listen(PORT, () =>
  console.log(`Notification Service running on port ${PORT}`)
)