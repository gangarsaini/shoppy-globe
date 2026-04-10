const Product = require("../model/product.modal");



// GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET single product
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// CREATE product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    // Validation
    if (!name || !price || !description || !stock) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    if (price <= 0 || stock < 0) {
      return res.status(400).json({ msg: "Invalid price or stock" });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// UPDATE product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, stock },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(updatedProduct);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({ msg: "Product deleted successfully" });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};