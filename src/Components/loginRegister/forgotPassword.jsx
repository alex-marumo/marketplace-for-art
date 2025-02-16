import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import "./loginRegister.css";

const ForgotPassword = () => {
    return (
        <div className="wrapper">
            <div className="form-box forgot-password">
                <form>
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Email" required aria-label="Email" />
                    </div>
                    <button type="submit" className="btn">Reset Password</button>
                    <p className="message">
                        Remembered your password? <Link to="/login" className="link">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;