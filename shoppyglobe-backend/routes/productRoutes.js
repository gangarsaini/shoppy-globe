const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");

//Import controller functions
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controller/product.controller");


// GET all products
router.get("/",getAllProducts);

// GET single product
router.get("/:id", getSingleProduct);

// CREATE product
router.post("/", createProduct);

// UPDATE product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);


module.exports = router;