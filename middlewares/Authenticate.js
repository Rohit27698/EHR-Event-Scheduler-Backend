var jwt = require('jsonwebtoken');
require("dotenv").config()

const Authenticate = (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(err){
                return res.send({message : "Please login first"})
                
            }
            req.userID = decoded.userID
            next()
          });

}


module.exports = {Authenticate}