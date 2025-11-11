import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect "/" to "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Your existing routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Optional 404 Page */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
