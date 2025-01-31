import React from 'react';
import { Link } from 'react-router-dom';
import './loginRegister.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required aria-label="Username" />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required aria-label="Password" />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgotPassword">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="signup-link">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/register">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;