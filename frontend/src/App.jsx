import { Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./components/ProfileContext.jsx"; // Import Profile Context
import Dashboard from "./pages/Dashboard.jsx";
import AuthPage from "./components/authpage.jsx"; // Import AuthPage

function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} /> // Add AuthPage route
      </Routes>
    </ProfileProvider>
  );
}

export default App;
