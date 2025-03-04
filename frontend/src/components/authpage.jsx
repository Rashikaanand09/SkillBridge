import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./authpage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const swapMode = () => {
    setIsLogin(!isLogin);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/auth/register", {
        name,
        email,
        password,
      });
      toast.success("User registered successfully!");
      console.log(response.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to register user.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
      toast.success("Login successful!");
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      {/* Left Section */}
      <div className={`auth-section left ${isLogin ? "show-button" : "show-form"}`}>
        {isLogin ? (
          <button onClick={swapMode} className="auth-button">
            Sign Up
          </button>
        ) : (
          <form onSubmit={handleRegister} className="auth-form">
            <h2>Sign Up</h2>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>

      {/* Right Section */}
      <div className={`auth-section right ${isLogin ? "show-form" : "show-button"}`}>
        {isLogin ? (
          <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button type="submit">Log In</button>
          </form>
        ) : (
          <button onClick={swapMode} className="auth-button">
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
