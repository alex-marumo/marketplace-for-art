import React from 'react';
import { Link } from 'react-router-dom';
import './loginRegister.css';
import logo from '../Assets/artisticLogo.png'; // Ensure this path is correct

const LoginSignUp = () => {
    return (
        <div className="landing-page">
            <div className="landing-image">
                <img src={logo} alt="Artistic Logo" className="logo" />
            </div>
            <div className="landing-content">
                <h1>Artistic</h1>
                <p>Showcase and buy art online</p>
                <Link to="/login"> 
                    <button className="btn">Login</button>
                </Link>
                <Link to="/register"> 
                    <button className="btn">Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default LoginSignUp;