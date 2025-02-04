import * as productService from "../services/product.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const result = await productService.getAllProducts(page, limit);
    
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.json(product);
    } catch (error) {
        if (error.message === "Product not found") {
            res.status(404).json({ message: error.message });
        } else {
            res
            .status(500)
            .json({ message: "Error fetching product", error: error.message });
        }
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const createdProduct = await productService.createProduct(newProduct);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: "Invalid product data", error: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const updatedProductData = await productService.updateProduct(productId, updatedProduct);
        res.json(updatedProductData);
    } catch (error) {
        if (error.message === "Product not found") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Error updating product", error: error.message });
        }
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        await productService.deleteProduct(productId);
        res.status(204).send({ message: "Product deleted successfully" });
    } catch (error) {
        if (error.message === "Product not found") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Error deleting product", error: error.message });
        }
    }
}