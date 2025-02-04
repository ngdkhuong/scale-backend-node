// src/index.js
import dotenv from "dotenv"
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Admin Service is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Admin Service is running on port ${PORT}`);
});