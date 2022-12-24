import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='login-main-container'>
      <div className='login-form-container'>
        <form className='login-form'>
          <h1>Login</h1>
          <p>Schedule an appointment now</p>
          <input type='email' name='email' placeholder='Email' />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <span id='practitioner-check'>
            <input
              type='checkbox'
              name='practitioner-checkbox'
              id='practitioner-checkbox'
            />
            &nbsp; Log in as practitioner
          </span>
          <button type='submit'>Log In</button>
        </form><br />
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
