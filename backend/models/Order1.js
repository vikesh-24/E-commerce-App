
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  deliveryDetails: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product1", required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  paymentOption: { type: String, required: true },
  paymentDetails: {
    cardNumber: { type: String },
    cardExpiry: { type: String },
    cardCVV: { type: String },
    paypalEmail: { type: String },
  },
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Orde1r", orderSchema);
