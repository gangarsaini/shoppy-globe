const express = require("express");
const Product = require("../model/product.modal");
const verifyToken = require('../middleware/auth')
const router = express.Router();
console.log("Hello  am product");





// GET all products
router.get("/", verifyToken, async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg:"Not found"});
  res.json(product);
});


//  CREATE product (IMPORTANT FIX)
router.post("/", async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;
    const newProduct = new Product({
      name,
      price,
      description,
      stock
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json(err);   //server error 500
  }
});


// UPDATE product
router.put("/:id", async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, stock },
      { new: true } // returns updated data
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);  //server error 500
  }
});


//DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    console.log(deletedProduct)
    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }
   res.status(200).json({ msg: "Product deleted successfully" });
   console.log(deletedProduct)
  } catch (err) {
    res.status(500).json(err); //server error 500
  }
});
module.exports = router;