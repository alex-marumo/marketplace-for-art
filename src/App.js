import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import Login from './Components/loginRegister/login';
import Register from './Components/loginRegister/register';
import ForgotPassword from './Components/loginRegister/forgotPassword';
import LoginSignUp from './Components/loginRegister/loginSignUp';

function App() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Router>
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginSignUp" element={<LoginSignUp toggleForm={toggleForm} />} />
          <Route path="/login" element={<Login toggleForm={toggleForm} />} />
          <Route path="/register" element={<Register toggleForm={toggleForm} />} />
          <Route path="/forgotPassword" element={<ForgotPassword toggleForm={toggleForm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
