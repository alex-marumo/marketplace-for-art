import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TwoFactorAuth.module.css';

const TwoFactorAuthVerification = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();

    const handleCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleCancel = () => {
        setVerificationCode('');
        navigate('/register'); // Navigate to the register page
    };

    const handleVerify = () => {
        // Handle 2FA verification logic here
        console.log('Verifying with code:', verificationCode);
        // Navigate to the verification step
        navigate('/homepage');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Two-Factor Authentication
            </h1>
            <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputContainer}>
                    <label htmlFor="code" className={styles.inputLabel}>
                        Enter verification code
                    </label>
                    <input
                        type="tel"
                        id="code"
                        className={styles.codeInput}
                        value={verificationCode}
                        onChange={handleCodeChange}
                        placeholder="Enter verification code"
                        aria-label="Verification code input"
                    />
                </div>
                <div className={styles.buttonGroup} role="group" aria-label="Form controls">
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={handleCancel}
                        aria-label="Cancel two-factor authentication"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={styles.confirmButton}
                        onClick={handleVerify}
                        aria-label="Confirm phone number for authentication"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TwoFactorAuthVerification;