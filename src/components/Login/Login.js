import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pracCheckbox, setPracCheckbox] = useState(false);
  const [errors, setErrors] = useState('');
  // const errors = ["Invalid Username or Password"]

  function handleLoginSubmit(e) {
    e.preventDefault();
    setPracCheckbox(false);
    setErrors([]);
    fetch(`/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          // onLogin(user);
          // setSuccess(user);
          // SET USER
        });
      } else {
        // response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className='login-main-container'>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <p>Schedule an appointment now</p>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id='practitioner-check'>
            <input
              type='checkbox'
              value={pracCheckbox}
              onChange={(e) => setPracCheckbox(e.target.value)}
            />
            &nbsp; Log in as practitioner
          </span>
          <button type='submit'>Log In</button>
        </form>
        <br />
        {errors ? (
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
          ''
        )}
        <div className='already'>
          <hr />
          <p>
            Don't have an account? &nbsp;
            <Link to={`/signup`}>
              <button type='button'>Sign Up</button>
            </Link>
          </p>
        </div>
      </div>
      <div className='login-img'></div>
    </div>
  );
}

export default Login;
