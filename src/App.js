import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import Login from './Components/loginRegister/login';
import Register from './Components/loginRegister/register';
import ForgotPassword from './Components/loginRegister/forgotPassword';
import LoginSignUp from './Components/loginRegister/loginSignUp';
import Homepage from './Components/homepage';
import UserPreferences from './Components/userPreferences';
import Recommendations from './Components/recommendations';
import TwoFactorAuth from './Components/loginRegister/2FA';
import TwoFactorAuthVerification from './Components/loginRegister/2FAverification';

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
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/userPreferences" element={<UserPreferences />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/2fa" element={<TwoFactorAuth />} />
          <Route path="/2fa-verification" element={<TwoFactorAuthVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
