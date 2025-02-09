import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate registration process
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Replace this with actual registration logic
        if (username && email && password) {
            // Navigate to 2FA page on successful registration
            navigate('/2fa');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="wrapper active">
            <div className="form-box signUp">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username" required aria-label="Username" />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required aria-label="Email" />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required aria-label="Password" />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" name="terms" required /> I agree to the terms & conditions
                        </label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="signup-link">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;