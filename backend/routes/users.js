import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const router = express.Router();
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
});

router.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error creating user' });
  }
});

export default router;
