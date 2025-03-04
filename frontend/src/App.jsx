import { Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./components/ProfileContext.jsx"; // Import Profile Context
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
