import React, { useState } from 'react';
import './SignUp.css';
import { Link, useHistory } from 'react-router-dom';

function SignUp({ loggedIn, setLoggedIn, userType, setUserType }) {
  const [errors, setErrors] = useState('');
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmation_password: '',
  });

  if (loggedIn) {
    if (userType == 'patient') {
      history.push('/patients/me');
    } else if (userType == 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType == 'admin') {
      history.push('/admin/me');
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((person) => {
          localStorage.setItem('token', person.jwt);
          localStorage.setItem('loggedIn', true);
          localStorage.setItem(
            'userType',
            formData.prac_checkbox ? 'practitioner' : 'patient'
          );

          if (formData.prac_checkbox) {
            localStorage.setItem('person', JSON.stringify(person.practitioner));
            setLoggedIn(true);
            setUserType('practitioner');
            history.push('/practitioners/me');
          } else {
            localStorage.setItem('person', JSON.stringify(person.user));
            setLoggedIn(true);
            setUserType('patient');
            history.push('/patients/me');
          }
        });
      } else {
        response.json().then((data) => {
          setErrors(data.errors);
        });
      }
    });
  }

  function updateFormData(e) {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }));
  }

  return (
    <div className='signup-main-container'>
      <div className='signup-form-container'>
        <form className='signup-form' onSubmit={handleSignupSubmit}>
          <h1>Signup</h1>
          <p>Register as a patient</p>
          <input
            type='text'
            id='username'
            placeholder='User Name'
            value={formData.username}
            onChange={updateFormData}
          />
          <input
            id='email'
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={updateFormData}
          />
          <input
            id='password'
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={updateFormData}
          />
          <input
            id='password_confirmation'
            type='password'
            placeholder='Confirm Password'
            value={formData.password_confirmation}
            onChange={updateFormData}
          />
          <button type='submit'>Sign Up</button>
        </form>

        <br />
        {Array.isArray(errors) ? (
          <div className='signup-error-display'>
            {errors.map((error) => {
              return (
                <li key={error} style={{ color: 'red' }}>
                  {error}
                </li>
              );
            })}
          </div>
        ) : (
          ''
        )}
        <br />
        <div className='already'>
          <hr />
          <p>
            Already have an account? &nbsp;
            <Link to={`/login`}>
              <button type='button'>Log In</button>
            </Link>
          </p>
        </div>
      </div>
      <div className='signup-img'></div>
    </div>
  );
}

export default SignUp;
