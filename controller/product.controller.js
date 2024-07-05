const Product = require('../models/product-models')


// Create New Product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Find all products
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//  Find Specific Product
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// update products
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// delete product
const deletProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({ message: "The following product has been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { getProducts, createProduct, getProduct, updateProduct, deletProduct }