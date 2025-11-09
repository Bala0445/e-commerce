import express from "express";
import Cart from "../models/cartModel.js";

const router = express.Router();

// Get all cart items
router.get("/", async (req, res) => {
  const cartItems = await Cart.find().populate("product");
  res.json(cartItems);
});

// Add to cart
router.post("/", async (req, res) => {
  const { productId, quantity } = req.body;
  const item = await Cart.create({ product: productId, quantity });
  res.json(item);
});

// Remove from cart
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

export default router;