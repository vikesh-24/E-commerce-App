
const express = require("express");
const Order = require("../models/Order1");
const router = express.Router();

router.post("/", async (req, res) => {
  const { deliveryDetails, products, totalPrice, paymentOption, paymentDetails } = req.body;

  try {
    const newOrder = new Order({
      deliveryDetails,
      products,
      totalPrice,
      paymentOption,
      paymentDetails,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error placing order. Please try again later." });
  }
});

module.exports = router;
