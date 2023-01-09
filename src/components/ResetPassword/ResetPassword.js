import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ResetPassword.css';
import Patient from '../Patient/Patient';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassoword] = useState('');
  const [newCPassword, setNewCPassoword] = useState('');
  const [sendEmailSuccess, setSendEmailSuccess] = useState(true);

  // To send confirmation email to user's email
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
    }).then((response) => {
      if (response.ok) {
        response.json().then(() => setSendEmailSuccess(true));
      }
    });
  };
  console.log(sendEmailSuccess);

  // Sends an update of passwords to DB and routes user
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    fetch('', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: newPassword,
        password_confirmation: newCPassword,
      }),
    }).then((response) => {
      if (response.ok) {
        return (
          <NavLink exact to='/patients/me'>
            <Patient />
          </NavLink>
        );
      }
    });
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
            <input
              type='password'
              name='new-pass'
              value={newPassword}
              onChange={(e) => setNewPassoword(e.target.value)}
            />
            <br />
            <label htmlFor='new-pass'>Confirm new password</label>
            <input
              type='password'
              name='new-pass'
              value={newCPassword}
              onChange={(e) => setNewCPassoword(e.target.value)}
            />
            <br />
            <button type='submit' onClick={handleResetPasswordSubmit}>
              Reset Password
            </button>
          </>
        ) : (
          <>
            <br />
            <label htmlFor='email'>Enter email address</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button type='submit' onClick={handleSendEmail}>
              Send Confirmation Email
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ResetPassword;
