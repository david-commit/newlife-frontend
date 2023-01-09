import React from 'react';
import { useState } from 'react';
import './ResetPassword.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sendEmailSuccess, setSendEmailSuccess] = useState(true);

  const handleSendEmail = (e) => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='reset-password-main-container'>
      <br />
      <br />
      <h1>Reset Password</h1>
      <form className='reset-password-form'>
        <br />
        {sendEmailSuccess ? (
          <>
            <label htmlFor='new-pass'>Enter new password</label>
            <input type='password' name='new-pass' />
            <br />
            <label htmlFor='new-pass'>Confirm new password</label>
            <input type='password' name='new-pass' />
            <br />
            <button type='submit'>Reset Password</button>
          </>
        ) : (
          <>
          <br />
            <label htmlFor='email'>Enter email address</label>
            <input type='email' name='email' />
            <br />
            <button type='submit'>Send Confirmation Email</button>
          </>
        )}
      </form>
    </div>
  );
}

export default ResetPassword;
