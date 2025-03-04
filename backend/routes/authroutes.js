// routes/authroutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authcontroller.js';

const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Protected route example
router.get('/protected', authenticateToken, (req, res) => {
    res.send({ message: 'Hello, authenticated user!' });
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).send({ message: 'Access denied. No token provided.' });

    const jwt = require('jsonwebtoken');
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send({ message: 'Access denied. Invalid token.' });
        req.user = user;
        next();
    });
}

export default router;
