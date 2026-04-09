const express = require("express");
const verifyToken = require("../middleware/auth");
const {
  addToCart,
  updateCart,
  deleteCart,
  getCart
} = require("../controller/cart.controller");

const router = express.Router();

// CREATE
router.post("/", verifyToken, addToCart);

//READ
router.get("/", verifyToken, getCart);

//UPDATE
router.put("/:id", verifyToken, updateCart);

//DELETE
router.delete("/:id", verifyToken, deleteCart);

module.exports = router;