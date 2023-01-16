import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddPractitioner.css'

const AddPractitioner = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    role:"",
    email: "",  
    phone: "",
    speciality: "",
    department: ""
  });

  const { name, role, email, phone, speciality, department } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/admin");
  };

  // const handleAddPractitioner = (e) => {
  //   e.preventDefault()
  //   fetch(`/practitioner/signup`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       password_confirmation
  //     })
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //        handleFillProfileDetails(data)
  //       })
  //     } else {
        
  //     }
  //   })
  // }

  // const handleFillProfileDetails = (data) => {
  //   fetch(`patient_profiles`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       practitioner_id: data.id,
  //       first_name,
  //       last_name,
  //       bio,
  //       dob,
  //       location,
  //       blood_group,
  //       height,
  //       weight,
  //       phone_number,
  //       bmi,
  //       job_title,
  //       image
  //     }),
  //   }).then((response) => {

  //   })

  // }

  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='add-practitioners-container'>
        <h1>Practitioner Information</h1>
        <form>
          <br />
          <label className='label' htmlFor='name'>
            Enter Practitioner Name
          </label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label className='label' htmlFor='name'>
            Enter Practitoner Role
          </label>
          <input
            type='text'
            placeholder='Role'
            name='role'
            value={role}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label className='label' htmlFor='email'>
            Enter Practitioner E-mail
          </label>
          <input
            type='email'
            placeholder='E-mail'
            name='email'
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label className='label' htmlFor='phone'>
            Enter Practitioner Phone Number
          </label>
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label className='label' htmlFor='speciality'>
            Enter Practitioner Speciality
          </label>
          <input
            type='text'
            placeholder='Speciality'
            name='speciality'
            value={speciality}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label className='label' htmlFor='department'>
            Enter Practitioner Department
          </label>
          <input
            type='text'
            placeholder='Department'
            name='department'
            value={department}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <button className='button-container' type='submit'>
            Add A practitioner
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPractitioner;