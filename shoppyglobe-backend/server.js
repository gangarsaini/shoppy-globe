const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/product", require("./routes/productRoutes"));
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

//router.get("/")
// router.get("/", require("./routes/productRoutes"));
// router.post("/", require("./routes/productRoutes"));
// DB Connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));