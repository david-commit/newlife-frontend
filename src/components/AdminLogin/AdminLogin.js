import React from 'react';
import './AdminLogin.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

function AdminLogin({ loggedIn, setLoggedIn, userType, setUserType }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState('');
  const history = useHistory();

  if (loggedIn) {
    if (userType == 'patient') {
      history.push('/patients/me');
    } else if (userType == 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType == 'admin') {
      history.push('/admin/me');
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    // setPracCheckbox(false);
    fetch('http://localhost:3000/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((person) => {
          localStorage.setItem('token', person.jwt);
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('userType', 'admin');

          localStorage.setItem('person', JSON.stringify(person.admin));
          setLoggedIn(true);
          setUserType('admin');
          history.push('/admin/me');
        });
      } else {
        response.json().then((errors) => {
          setErrors(errors);
        });
      }
    });
  }
  console.log(errors);

  function updateFormData(e) {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }));
  }

  return (
    <div className='admin-login-main-container'>
      <div className='admin-login-container'>
        <form onSubmit={handleLoginSubmit} id='admin-login-form'>
          <h1>Administrator Login</h1>
          <br />
          <br />
          <input
            id='username'
            type='text'
            placeholder='Username'
            value={formData.email}
            onChange={updateFormData}
          />
          <br />
          <input
            id='password'
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={updateFormData}
          />
          <br />
          <p>
            Forgot password? <Link to='/reset-password'>Reset</Link>
          </p>
          <br />
          <button type='submit'>Log In</button>
          <br />
          {errors && errors ? (
            <>
              <div className='admin-login-error-display'>
                {errors ? <p>{errors.error}</p> : ''}
              </div>
              <br />
            </>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
