const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product-models');
const app = express();
const productRoute = require('./routes/product.route')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute)


//  home page
app.get('/', (req, res) => {
    res.send("hello Universe")
});


mongoose.connect("mongodb+srv://wpress160:st1YG5OV7qSkdRi1@backenddb.epy55b7.mongodb.net/crud?retryWrites=true&w=majority&appName=backenddb")
    .then(() => {
        console.log('Database Connected');
        app.listen(8080, () => {
            console.log('Listening on port 8080')
        });
    })
    .catch((e) => {

        console.log('Database Connection Failed' + e)

    })

// create Product
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// });

// find all products
// app.get('/api/products', async (req, res) => {
//     try {
//         const product = await Product.find({})
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// find specific product
// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

//  update product
// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" })
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// delete product
// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" })
//         }
//         res.status(200).json({ message: "The following product has been deleted", product });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
