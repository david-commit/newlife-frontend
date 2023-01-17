import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddPractitioner.css';

const AddPractitioner = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [firstErrors, setFirstErrors] = useState([]);
  const [secondErrors, setSecondErrors] = useState([]);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDOB] = useState('');
  const [location, setLocation] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [phone, setPhone] = useState('');
  const [bmi, setBMI] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [image, setImage] = useState('');
  let history = useHistory();
  console.log(bmi)

  // Handles Practitioner Signup
  const handleAddPractitioner = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/practitioner/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: cPassword,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          handleFillProfileDetails(data);
        });
      } else {
        response.json().then((err) => {
          setFirstErrors(err.errors);
        });
      }
    });
  };

  // Handles Practitioner Profile data
  const handleFillProfileDetails = (data) => {
    fetch(`http://localhost:3000/patient_profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        practitioner_id: data.id,
        first_name: fName,
        last_name: lName,
        bio,
        dob,
        location,
        blood_group: bloodGroup,
        height,
        weight,
        phone_number: phone,
        bmi,
        job_title: jobTitle,
        image,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json(() => alert('Practitioner added successfully!'));
      } else {
        response.json().then((err) => {
          setSecondErrors(err.errors);
          alert('Practitioner not added!');
        });
      }
    });
  };

  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='add-practitioners-container'>
        <h1>Practitioner Information</h1>
        <form onSubmit={handleAddPractitioner}>
          <br />
          <label>Enter Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>Enter email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm Password'
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          {/* =======SECOND REQUEST========== */}
          <br />
          <label>Enter first name</label>
          <input
            type='text'
            placeholder='First name'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <br />
          <label>Enter last name</label>
          <input
            type='text'
            placeholder='Last name'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <br />
          <label>Enter Phone</label>
          <input
            type='tel'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>Enter Bio</label>
          <textarea
            type='text'
            placeholder='Provide more information about youself...'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <br />
          <label>Enter Date of Birth</label>
          <input
            type='date'
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <br />
          <label>Home Location</label>
          <input
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <label>Enter blood group</label>
          <input
            type='text'
            placeholder='Blood group'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <br />
          <label>Enter physical height (cm)</label>
          <input
            type='number'
            placeholder='Height (cm)'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label>Enter weight (Kg)</label>
          <input
            type='number'
            placeholder='Weight (Kg)'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <label>BMI</label>
          <input
            disabled
            placeholder='0'
            value={weight / height ** 2}
            onChange={(e) => setBMI(e.target.value)}
          />
          <br />
          <label>Enter Job Title</label>
          <input
            type='text'
            placeholder='e.g Clinical officer'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <br />
          <label>Enter Profile Image URL</label>
          <input
            type='url'
            placeholder='Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {/* <br />
          <label>Enter Practitioner Department</label>
          <input
            type='text'
            placeholder='Department'
            name='department'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          /> */}
          <br />
          <button className='button-container' type='submit'>
            Add A practitioner
          </button>
        </form>
        <br />
        {Array.isArray(firstErrors) && firstErrors
          ? firstErrors.map((error) => {
              return <li style={{ color: 'red' }}>{error}</li>;
            })
          : ''}
        {Array.isArray(secondErrors) && secondErrors
          ? secondErrors.map((error) => {
              return <li style={{ color: 'red' }}>{error}</li>;
            })
          : ''}
      </div>
    </div>
  );
};

export default AddPractitioner;
