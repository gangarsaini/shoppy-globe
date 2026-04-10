const Cart = require('../model/cart.modal');
const Product = require("../model/product.modal");


//ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
     //Validation
    if (!productId || !quantity) {
      return res.status(400).json({ msg: "ProductId and quantity required" });
    }

    if (quantity <= 0) {
      return res.status(400).json({ msg: "Quantity must be greater than 0" });
    }
   
    // check product exists
    const product = await Product.findById(productId);
    console.log(product)
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    const item = new Cart({
      userId: req.user.id,
      productId,
      quantity
    });

    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};



// UPDATE CART ITEM
const updateCart = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    item.quantity = req.body.quantity;
    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};



//DELETE CART ITEM
const deleteCart = async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};



//GET CART ITEMS (IMPORTANT)
const getCart = async (req, res) => {
  try {
    const items = await Cart.find({ userId: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addToCart,
  updateCart,
  deleteCart,
  getCart
};