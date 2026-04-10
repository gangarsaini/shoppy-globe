const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user.modal");

const router = express.Router();

//Register
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



//login
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