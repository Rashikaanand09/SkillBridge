import express from "express";
import { registerUser, loginUser } from "../controllers/authcontroller.js";

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

export default router;
