const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const adminMiddleware = async (req, res, next) => {
    try {
        // Retrieve the JWT token from the request headers
        ;
        const token = req.header("Authorization");
        
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized HTTP, Token not provided.." });
        }

        // Extract the token and verify
        const jwtToken = token.replace("Bearer","").trim();
        
        // Verify the JWT token
        const key = "mysecret";
        const isVerified = jwt.verify(jwtToken, key);
        
        // isVerified.isAdmin='true';
        
        console.log(`with auth:${isVerified} with id:${isVerified.isAdmin}`);
        
        console.log(isVerified);
        

        // Check if the user making the request is an admin
        if (!isVerified.isAdmin) {
            return res.status(403).json({ message: 'Forbidden: User is not an admin' });
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid Token from adminMiddleware' });
    }
};

module.exports = adminMiddleware;
