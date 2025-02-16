import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';
import logo from './Assets/artisticLogo.png'; // Ensure this path is correct

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-image">
                <img src={logo} alt="Artistic Logo" className="logo" />
            </div>
            <div className="landing-content">
                <h1>Artistic</h1>
                <p>Showcase and buy art online</p>
                <Link to="/loginSignUp"> 
                    <button className="btn">Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;