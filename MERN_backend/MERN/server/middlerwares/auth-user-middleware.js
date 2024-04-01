 const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

 const authMiddleware = async (req,res,next)=>{
        const token = req.header("Authorization");
        
        if(!token){
            //if you attempt to use an expired token , you'll receive a 
            //" 401 Unauthorized HTTP" response..  
                return res
                .status(401)
                .json({message:"Unauthorized HTTP , Token not provided.."});
        }
        //  Assuming token is in the format "Bearer <jwtToken>, Removing the"Bearer" prefix..
        const jwtToken = token.replace("Bearer","").trim();
        console.log(jwtToken);
        
        try {
            const key= "mysecret";
            const isVerified = jwt.verify(jwtToken,key);
            console.log(isVerified);//the data in isVerified is payload that are passed when token is created.. in user-model.js file...
           
            /*
             ***************************************************************
             before this dont forgot to import reqiure user model....:
             ***************************************************************
            */
            const userData = await User.findOne({email:isVerified.email}).
            select({
                password : 0, //here passwoord : 0 means it doesnt included in userData....
            });
            console.log(userData);
/*
 *******************************************************************************************************************************
  in Express.js request object is  an obj that contains info.. about HTTP request..By adding custon properties to req ,
   you can pass info between middleware functions or maje it available in your route handlers.....
  ******************************************************************************************************************************
*/

/*
  **************************
  custom properties of user.....
  **************************
*/
            req.User = userData;
            req.token = token;
            req.userID = userData._id;
            
            
            next();
        } catch (error) {
            return res
            .status(401)
            .json({message:"Unauthorized Invalid Token..."});
        
        }
 };

 module.exports = authMiddleware;