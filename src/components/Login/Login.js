import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';

function Login({
  setUserPatient,
  setUserPractitioner,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pracCheckbox, setPracCheckbox] = useState(false);
  const [errors, setErrors] = useState('');
  const [userPatientSuccess, setUserPatientSuccess] = useState(false);
  const [userPractitionerSuccess, setUserPractitionerSuccess] = useState(false);
  const patientLoginLink = 'http://localhost:3000/login';
  const practitionerLoginLink = 'http://localhost:3000/practitioner/login';
  const loginLink = pracCheckbox ? practitionerLoginLink : patientLoginLink;
  // const errors = ["Invalid Username or Password"]
  console.log(loginLink);

  function handleLoginSubmit(e) {
    e.preventDefault();
    // setPracCheckbox(false);
    setErrors([]);
    fetch(loginLink, {
      method: 'POST',
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
          pracCheckbox
            ? setUserPractitioner(user) && setUserPractitionerSuccess(true)
            : setUserPatient(user) && setUserPatientSuccess(true) && console.log(user)
          localStorage.setItem('token', user.jwt);
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
        console.log(response);
      }
    });
  }

  if (userPatientSuccess) {
    return <Redirect to='/patients/me' />;
  }
  if (userPractitionerSuccess) {
    return <Redirect to='/practitioners/me' />;
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
          <label id='practitioner-check'>
            <input
              type='checkbox'
              value={pracCheckbox}
              onChange={() => setPracCheckbox(!pracCheckbox)}
            />
            &nbsp; Log in as practitioner
          </label>
          <button type='submit'>Log In</button>
        </form>
        <br />
        {errors ? (
          <>
            <div className='login-error-display'>
              {errors?.map((error) => {
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
            Forgot password?{' '}
            <Link to='/reset-password' id='reset-text'>
              Reset
            </Link>
          </p>
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
