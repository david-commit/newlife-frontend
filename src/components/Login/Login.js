import React from 'react';
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
          <input type="radio" name="" id="" />
          <button type='submit'>Log In</button>
        </form>
      </div>
      <div className='login-img'></div>
    </div>
  );
}

export default Login;
