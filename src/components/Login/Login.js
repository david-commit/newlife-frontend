import React from 'react';
import './Login.css';
import loginImg from '../../img/Pexels Photo by Karolina Grabowska.png';

function Login() {
  return (
    <div className='login-main-container'>
      <div className='login-form'>
        <h1>Login</h1>
        <p>Schedule an appointment now</p>
      </div>
      <div className='login-img'>
        <img src={loginImg} alt='' />
      </div>
    </div>
  );
}

export default Login;
