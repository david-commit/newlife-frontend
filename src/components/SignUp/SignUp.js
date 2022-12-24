import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch(`/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
        dob,
        blood_group: bloodGroup,
        height,
        weight,
        password,
        password_confirmation: cPassword
      }),
    });
  }

  return (
    <div className='signup-main-container'>
      <div className='signup-form-container'>
        <form className='signup-form'>
          <h1>Signup</h1>
          <p>Register as a patient</p>
          <input
            type='text'
            placeholder='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='tel'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='date'
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <input
            type='text'
            placeholder='Blood group eg O-'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <input
            type='text'
            placeholder='Height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type='text'
            placeholder='Weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
      <div className='signup-img'></div>
    </div>
  );
}

export default SignUp;
