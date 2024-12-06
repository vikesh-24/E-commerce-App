const express = require("express");
const Product = require("../models/Product1");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const product = new Product({ name, description, price, image, category, stock });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
});

module.exports = router;
