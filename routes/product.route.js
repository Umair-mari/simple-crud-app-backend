const express = require('express');
const Product = require('../models/product-models');
const Router = express.Router();
const { getProducts, createProduct, getProduct, updateProduct, deletProduct } = require('../controller/product.controller')



// Create New Products
Router.post('/', createProduct);

// Find All Products
Router.get('/', getProducts);

// Find specific Product
Router.get('/:id', getProduct);

// Update Product
Router.put('/:id', updateProduct);

// delete Product
Router.delete('/:id', deletProduct);

module.exports = Router;