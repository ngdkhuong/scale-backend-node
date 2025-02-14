import express from "express";
import * as categoryController from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);

export default router;