import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Import Mongoose
import dotenv from 'dotenv'; // Load environment variables
import authRoutes from "./routes/authroutes.js";

// Load environment variables from config.env
dotenv.config({ path: './config/.env' });

const app = express();

// Connect to MongoDB using the URL from the environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Middleware
app.use(cors({
  origin: "http://localhost:5174", // Allow requests from your frontend
  credentials: true, // Allow cookies and credentials
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start Server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
