import React from 'react';
import './AdminLogin.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AdminLogin({ setUserAdmin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState("")

  function handleAdminLogin(e){
    e.preventDefault()
    fetch(`http://localhost:3000/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          // SET USER
          setUserAdmin(user)
        })
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return (
    <div className='admin-login-main-container'>
      <div className='admin-login-container'>
        <form onSubmit={handleAdminLogin} id='admin-login-form'>
          <h1>Administrator Login</h1>
          <br />
          <br />
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <p>
            Forgot password? <Link to='/reset-password'>Reset</Link>
          </p>
          <br />
          <button type='submit'>Log In</button>
        </form>
        <br />
        {errors && errors ? (
          <>
            <div className='login-error-display'>
              {errors.map((error) => {
                console.log(error);
                return (
                  <p key={error} style={{ color: 'red' }}>
                    {error}
                  </p>
                );
              })}
            </div>
            <br />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
