// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../model/user.modal");

// const router = express.Router();

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashed });
//     await user.save();

//     res.json({ msg: "User registered" });
//   } catch (err) {
//     res.status(404).json(err);
//   }
// });

// LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;



const {register,login} = require('../controller/auth.controller')

function UserRoute(app){
// read
app.post('/api/register', register)
 // create
app.post('/api/login', login)

}


module.exports = UserRoute;