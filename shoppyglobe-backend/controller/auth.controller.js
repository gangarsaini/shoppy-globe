const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user.modal");

const router = express.Router();

// REGISTER
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


async function register(req,res){
   try{
     let {name, email, password } = req.body
     let data  =  await User.findOne({email})
    console.log(data)
    if(data){
     return res.status(401).json({msg:"User already exits"})
   }
   else{
     let newUser  = await User.create({
     name,
     email,
     password:bcrypt.hashSync(password, 10)
    })
      console.log(newUser)
      return  res.status(200).json({"user":newUser})
    }
    
  }
  catch(err){
   return res.status(401).json({msg:"Error while Registering User"})
  }
}


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
//   } 
//   catch (err) {
//     res.status(500).json(err);
//   }
// });


async function login(req,res){
  try{
    let {email,password} = req.body;
    let data  =  await User.findOne({email})
    console.log(data,1)
   if(!data){
     return res.status(401).json({msg:"User not exits"})
   }else{
    
    let vaildPassword = bcrypt.compareSync(password,data.password);
    console.log(vaildPassword,1)
    if(!vaildPassword){
      return res.status(403).json({msg:"Invalid password"})
    } 
    const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET)
    return res.status(200).json({
        user:{
        name:data.name,
        email:data.email,
        password:data.password
      },
      accessToken: token
      
    })
   }
  }
  catch(err){
   return res.status(401).json({msg:"Error while feching login"})
  }
}

module.exports = {register,login};