import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TwoFactorAuthVerification.module.css';

const TwoFactorAuthVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleCancel = () => {
    setVerificationCode('');
    navigate('/'); // Navigate to the home page or previous page
  };

  const handleVerify = () => {
    // Handle 2FA verification logic here
    console.log('Verifying with code:', verificationCode);
    // Navigate to the dashboard or next step
    navigate('/dashboard');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Verify Your Code
      </h1>
      <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputContainer}>
          <label htmlFor="code" className={styles.inputLabel}>
            Enter the verification code sent to your phone
          </label>
          <input
            type="text"
            id="code"
            className={styles.codeInput}
            value={verificationCode}
            onChange={handleCodeChange}
            placeholder="Enter your verification code"
            aria-label="Verification code input"
          />
        </div>
        <div className={styles.buttonGroup} role="group" aria-label="Form controls">
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCancel}
            aria-label="Cancel verification"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.verifyButton}
            onClick={handleVerify}
            aria-label="Verify code"
          >
            Verify
          </button>
        </div>
      </form>
    </main>
  );
};

export default TwoFactorAuthVerification;