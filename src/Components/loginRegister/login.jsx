import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginRegister.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate login process
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Replace this with actual login logic
        if (username === 'test' && password === 'password') {
            // Redirect to homepage on successful login
            navigate('/homepage');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="wrapper">
            <div className="form-box login">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username" required aria-label="Username" />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required aria-label="Password" />
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