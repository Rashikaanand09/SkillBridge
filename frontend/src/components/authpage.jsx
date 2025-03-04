import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import validator from "validator"; // For email validation
import "react-toastify/dist/ReactToastify.css";
import "./authpage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [signupStep, setSignupStep] = useState(1); // Step 1: Email, Step 2: OTP
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const swapMode = () => {
    setIsLogin(!isLogin);
    setSignupStep(1); // Reset signup step
  };

  // Validate email format
  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  // Handle sending OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post("http://localhost:4000/api/auth/send-otp", { email });
      toast.success("OTP sent to your email!");
      setSignupStep(2); // Move to OTP verification step
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  // Handle OTP verification
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/verify-otp", { email, otp });
      toast.success("Email verified! Please set your password.");
      setSignupStep(3); // Move to password setup step
    } catch (err) {
      console.error(err);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  // Handle final registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", { name, email, password });
      toast.success("User registered successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to register user.");
    }
  };

  return (
    <div className="background">
      <div className="auth-container">
        <ToastContainer />
        <div className={`auth-section left ${isLogin ? "show-button" : "show-form"}`}>
          {isLogin ? (
            <button onClick={swapMode} className="auth-button">
              Sign Up
            </button>
          ) : (
            <form onSubmit={signupStep === 1 ? handleSendOTP : signupStep === 2 ? handleVerifyOTP : handleRegister} className="auth-form">
              <h2>Sign Up</h2>
              {signupStep === 1 && (
                <>
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                  <button type="submit">Send OTP</button>
                </>
              )}
              {signupStep === 2 && (
                <>
                  <label>OTP</label>
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter the OTP sent to your email" />
                  <button type="submit">Verify OTP</button>
                </>
              )}
              {signupStep === 3 && (
                <>
                  <label>Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                  <label>Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <span className="password-eye" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <button type="submit">Sign Up</button>
                </>
              )}
            </form>
          )}
        </div>

        {/* Right Section */}
        <div className={`auth-section right ${isLogin ? "show-form" : "show-button"}`}>
          {isLogin ? (
            <form onSubmit={(e) => e.preventDefault()} className="auth-form">
              {/* Login form here */}
            </form>
          ) : (
            <button onClick={swapMode} className="auth-button">
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
