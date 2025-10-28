const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Debug: show that JWT_SECRET is loaded
console.log('JWT_SECRET from env:', process.env.JWT_SECRET);

const verifyToken = (req, res, next) => {
    try {

        // Log the incoming Authorization header
        console.log("Authorization Header:", req.headers['authorization']);


        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Expecting 'Bearer <token>'

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const jwtSecret = process.env.JWT_SECRET;
        console.log('Using JWT_SECRET from:', jwtSecret ? 'environment' : 'fallback');

        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                console.error("JWT verification error:", err.message);
                return res.status(403).json({ message: "Invalid token." });
            }

            // Attach the decoded token payload to req.user
            req.user = decoded;
            console.log("Token verified. Decoded payload:", decoded);
            console.log("req.user set to:", req.user);
            next(); // pass control to the next middleware/route
        });
    } catch (error) {
        console.error("verifyToken middleware error:", error.message);
        res.status(500).json({ message: "Internal server error in token verification." });
    }
};

module.exports = verifyToken;
