import React from 'react';
import { Link } from 'react-router-dom';
import './loginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="wrapper active">
            <div className="form-box signUp">
                <form>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required aria-label="Username" />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required aria-label="Email" />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required aria-label="Password" />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the terms & conditions
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