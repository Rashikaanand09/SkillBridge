import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/signup';
import AuthPage from './components/authpage';

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
