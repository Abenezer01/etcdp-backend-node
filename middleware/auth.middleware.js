const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

exports.verifyAccessToken = async(req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    // 1. Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
            message: "Authorization header not found or format is invalid (Expected: Bearer <token>).",
            errorCode: "NO_TOKEN_PROVIDED"
        });
    }

    // 2. Extract the token string (the part AFTER 'Bearer ')
    const token = authHeader.split(' ')[1];

    // Check if the extracted token is null or empty
    if (!token) {
        return res.status(401).json({ 
            message: "No token provided!", 
            errorCode: "NO_TOKEN_PROVIDED"
        });
    }

    // 3. Verify the token against the secret key
    // The jwt.verify function is synchronous here and handles the expiration check
    jwt.verify(token, ACCESS_TOKEN_KEY, (err, decoded) => {
        if (err) {
            // Check specifically for expiration
            if (err.name === 'TokenExpiredError') {
                // Signal to the client that the Access Token is expired
                return res.status(401).json({ 
                    message: "Access Token expired.", 
                    errorCode: "ACCESS_TOKEN_EXPIRED" // Updated for clarity
                });
            }
            // Handle other errors (invalid signature, malformed token, etc.)
            return res.status(403).json({ 
                message: "Invalid Token.",
                errorCode: "INVALID_TOKEN"
            });
        }
        
        // 4. Token is valid: Attach user info to the request object
        req.userId = decoded.id; 
        req.userPayload = decoded; // Optionally attach the full payload
        
        // Move to the next middleware or route handler
        next();
    });
};
