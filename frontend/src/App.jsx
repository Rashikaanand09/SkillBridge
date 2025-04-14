import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from "./components/ProfileContext.jsx"; // Import Profile Context
import Homepage from './pages/Homepage.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/login.jsx";
import SignupPage from "./pages/signup.jsx";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/coursepage";
import CourseVideosPage from './pages/CourseVideoPages.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define a simple Homepage component
// const Homepage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Homepage!</h1>
//       <p>This is the main page of our application.</p>
//       <ul>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//       </ul>
//     </div>
//   );
// };

function App() {
  return (
    <ProfileProvider>

      <ToastContainer />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-video/:courseTitle" element={<CourseVideosPage />} />
      </Routes>
      {/* </Router> */}
    </ProfileProvider>
  );
}

export default App;
