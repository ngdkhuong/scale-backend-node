import Product from "../models/product.model.js"

export const getAllProducts = async (page, limit) => {
    const skip = (page - 1) * limit;
    
    const products = await Product.find()
        .skip(skip)
        .limit(limit)
        .populate("category", "name");

    const total = await Product.countDocuments();

    return {
        products,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalProducts: total,
    };
}

export const getProductById = async (id) => {
    const product = await Product.findById(id).populate("category", "name");
    return product;
}

export const createProduct = async (productData) => {
    const { name, description, price, category, inventory, images } = productData;
    const newProduct = new Product({
        name,
        description,
        price,
        category,
        inventory,
        images,
    });
    await newProduct.save();
    return newProduct;
}

export const updateProduct = async (productId, updatedProductData) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
    return updatedProduct;
}

export const deleteProduct = async (productId) => {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct
}