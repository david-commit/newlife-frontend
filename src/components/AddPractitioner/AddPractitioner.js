import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddPractitioner.css';

const AddPractitioner = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [cPassword, setCPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [errors, setErrors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [addPracSuccess, setAddPracSuccess] = useState(false)
  let history = useHistory();

  // Fetch All Departments
  useEffect(() => {
    fetch(`http://localhost:3000/departments`)
      .then((r) => r.json())
      .then((d) => setDepartments(d));
  }, []);

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
        // password_confirmation: cPassword,
        department_id: department,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          // history.push(`/admin/add-practitioner-profile`);
          setAddPracSuccess(true)
          setTimeout(() => {
            setAddPracSuccess(false);
          }, 3500)
        });
      } else {
        response.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  };

  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='add-practitioners-container'>
        {/* <Tab data={data} /> */}
        <h1>New Practitioner</h1>
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
          {/* <br />
          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm Password'
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          /> */}
          <br />
          <label>Select medical department</label>
          <select onChange={(e) => setDepartment(e.target.value)}>
            <option hidden>Select Department</option>
            {departments?.map((dep) => {
              return (
                <option key={dep.id} value={dep.id}>
                  {dep.name}
                </option>
              );
            })}
          </select>
          <br />
          <button className='button-container' type='submit'>
            Add practitioner
          </button>
        </form>
        <br />
        {/* -- ERROR HANDLING -- */}
        {Array.isArray(errors) && errors
          ? errors.map((error) => {
              return <li style={{ color: 'red' }}>{error}</li>;
            })
          : ''}
        {addPracSuccess ? <p id='add-prac-success'>Practitioner created succesfully</p> : ''}

      </div>
    </div>
  );
};

export default AddPractitioner;
