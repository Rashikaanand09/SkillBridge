import express from "express";

const router = express.Router();

// Define your dashboard routes here
router.get("/", (req, res) => {
    res.send("Dashboard route working!");
});

export default router; // ✅ Default export added
