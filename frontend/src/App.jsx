import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from "./components/ProfileContext.jsx"; // Import Profile Context
import Dashboard from "./pages/Dashboard.jsx";
import AuthPage from "./components/authpage.jsx"; // Import AuthPage
import Home from "./pages/Home.jsx"; // Import Home page

function App() {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
