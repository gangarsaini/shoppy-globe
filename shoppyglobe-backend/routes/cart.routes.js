const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const auth = require("../middleware/auth");

const router = express.Router();

// ADD to cart
router.post("/", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ msg: "Product not found" });

  const item = new Cart({
    userId: req.user.id,
    productId,
    quantity
  });

  await item.save();
  res.json(item);
});

// UPDATE quantity
router.put("/:id", auth, async (req, res) => {
  const item = await Cart.findById(req.params.id);

  if (!item) return res.status(404).json({ msg: "Item not found" });

  item.quantity = req.body.quantity;
  await item.save();

  res.json(item);
});

// DELETE item
router.delete("/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;