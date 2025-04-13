import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/login.css"; // Import CSS file

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!email || !password) {
        setError("Email and password are required");
        setLoading(false);
        return;
      }
    try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(
        `${backendUrl}/api/auth/login`, // Backend URL
        { email, password }, // Request body
        {
          withCredentials: true, // Include credentials (cookies)
          headers: {
            "Content-Type": "application/json", // Set content type
          },
        }
      );
  
      const data = response.data;
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userName", data.user.username);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLoginClick}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={() => setIsVisible(!isVisible)} className="toggle-password">
              {isVisible ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button className="register-button" onClick={() => navigate("/signup")}>
          Register
        </button>

        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}
