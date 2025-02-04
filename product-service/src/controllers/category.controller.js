import * as categoryServices from "../services/category.service.js";
  
  // Lấy tất cả danh mục
  export const getAllCategories = async (req, res) => {
    try {
      const categories = await categoryServices.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching categories",
        error: error.message,
      });
    }
  };
  
  // Tạo danh mục mới
  export const createCategory = async (req, res) => {
    try {
      const savedCategory = await categoryServices.createCategory(req.body);
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(400).json({
        message: "Error creating category",
        error: error.message,
      });
    }
  };