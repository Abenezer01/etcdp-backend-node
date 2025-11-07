const jwt = require('jsonwebtoken');
const TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

function authRequired(req, res, next) {
    // Check if the 'authorization' header exists
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        res.status(401).json({ success: false, message: "No token provided" });
    } else {
        // Split the header and get the token
        const token = authorizationHeader.split(" ")[1];
        

        
        if (!token) {
            res.json({ success: false, message: "No token provided" });
        } else {


            jwt.verify(token, TOKEN_KEY, (err, decoded) => {
                if (err) {
                    res.status(401).json({ success: false, message: "Token is invalid" + err });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    }
}

module.exports = authRequired;
