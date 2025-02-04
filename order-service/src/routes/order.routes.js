import express from "express";
import {
  createOrder,
  getOrder,
  updateOrderStatus,
  getUserOrders,
} from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/:orderId", authMiddleware, getOrder);
router.put("/:orderId/status", authMiddleware, updateOrderStatus);
router.get("/user/:userId", authMiddleware, getUserOrders);

export default router;