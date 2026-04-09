const jwt = require("jsonwebtoken");
const User = require('../model/user.modal')
// module.exports = (req, res, next) => {
//     const token = req.header("Authorization");
//     if (!token) return res.status(401).json({ msg: "No token" });
//     try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//     } 
    
//     catch {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };


// var jwt = require('jsonwebtoken');
// const UserModel = require('../model/user.model');

function verifyToken(req,res,next){
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=== "JWT"){
     jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, 
     async (err,verifiedtoken)=>{
        if(err){
            res.status(401).json({msg:"Invaild JWT Token"})
        }
         let user = await User.findById(verifiedtoken.id);
         const {email, fullname} = user;
         req.user = {email, fullname};
        next()
     }
    );
  }
  else{
    res.status(404).json({msg:"login first, You have not token"})
  }
}

module.exports = verifyToken;



