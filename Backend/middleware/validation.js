const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")


const Validation =async(req,res,next)=>{
   try{
    let token =req.header('x-token');
    if(!token){
        res.status(403).send("no token");
        
    }
    
       const decode = jwt.verify(token,"pavan");
       req.user = decode.user
       next();
    
   }
   catch(err){
    console.log(err);
    res.status(500).send("Server Error");
   }

}

module.exports = Validation;




// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");

// const Validation = asyncHandler(async (req, res, next) => {
//   let token;
//   let authHeader = req.headers.authorization; 
//   if (authHeader && authHeader.startsWith("Bearer")) {
//     token = authHeader.split(" ")[1];

//     try {
//       const decode = jwt.verify(token, "pavan");
//       req.user = decode; 
//       console.log(decode);
//       next(); 
//     } catch (err) {
      
//       return next(err);
//     }
//   } else {
//     res.status(401).send("notoken"); 
//   }
// });

// module.exports = Validation;
