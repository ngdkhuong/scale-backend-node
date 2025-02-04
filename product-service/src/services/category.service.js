import Category from "../models/category.model.js";

// Lấy tất cả danh mục
export const getAllCategories = async () => {
    const categories = await Category.find();
    return categories;
};

// Tạo danh mục mới
export const createCategory = async (categoryData) => {
    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();
    return savedCategory;
};