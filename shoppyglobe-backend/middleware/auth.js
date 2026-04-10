const jwt = require("jsonwebtoken");
const User = require('../model/user.modal')


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



