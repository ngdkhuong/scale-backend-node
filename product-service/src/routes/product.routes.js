import * as productController from "../controllers/product.controller.js";

import express from 'express';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

export default router