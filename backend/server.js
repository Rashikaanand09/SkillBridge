import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session"; // For session management
import nodemailer from 'nodemailer'; // For sending emails
import otpGenerator from 'otp-generator'; // For generating OTPs
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config({ path: "./config/.env" });

const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Connect to MongoDB
if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env file');
  process.exit(1); // Exit if MONGO_URI is missing
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Function to generate OTP
const generateOTP = () => {
  return otpGenerator.generate(6, { upperCase: false, specialChars: false });
};

// Function to send email using nodemailer
const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Verification OTP',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Route to send OTP
app.post('/api/auth/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  await sendEmail(email, otp);
  req.session.otp = otp; // Store OTP in session
  req.session.email = email; // Store email in session for verification
  res.json({ message: 'OTP sent successfully' });
});

// Route to verify OTP
app.post('/api/auth/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (req.session.otp === otp) {
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

// Import routes
import authRoutes from './routes/authroutes.js';
import uploadRoutes from "./routes/uploadRoutes.js";
import dashboardRoutes from "./routes/dashboard.js";

// Use routes
app.use('/api/auth', authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/uploads", uploadRoutes);

// Serve static files for uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
