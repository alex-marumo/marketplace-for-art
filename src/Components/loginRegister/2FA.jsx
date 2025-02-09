"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TwoFactorAuth.module.css';

const TwoFactorAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCancel = () => {
    setPhoneNumber('');
    navigate('/'); // Navigate to the home page or previous page
  };

  const handleConfirm = () => {
    // Handle 2FA confirmation logic here
    console.log('Confirming with phone number:', phoneNumber);
    // Navigate to the verification step
    navigate('/2fa-verification');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Two-Factor Authentication
      </h1>
      <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputContainer}>
          <label htmlFor="phone" className={styles.inputLabel}>
            Enter phone number to send a code
          </label>
          <input
            type="tel"
            id="phone"
            className={styles.phoneInput}
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            aria-label="Phone number input"
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
            onClick={handleConfirm}
            aria-label="Confirm phone number for authentication"
          >
            Confirm
          </button>
        </div>
      </form>
    </main>
  );
};

export default TwoFactorAuth;