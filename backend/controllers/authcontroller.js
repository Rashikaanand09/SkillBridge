// controllers/authController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

// Register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Since password hashing is handled in the model, no need to hash here
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to create user' });
    }
};

// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).send({ message: 'Invalid email or password' });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).send({ message: 'Invalid email or password' });

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.send({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to login' });
    }
};

export { registerUser, loginUser };
