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

  const { name, role, username, email, phone, speciality, department } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/admin");
  };
  return (
    <div className="all-practitioners-main-container">
      <AdminSidebar/>
      <div className="add-practitioners-container">
        <h1>Practitioner Credentials</h1>
        <form onSubmit={e => onSubmit(e)}>
        <br/>
            <input
              type="text"
              placeholder="Enter Practitioner Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          <br/>
            <input
              type="text"
              placeholder="Enter Practitoner Role"
              name="role"
              value={role}
              onChange={e => onInputChange(e)}
            />
            <br/>
            <input
              type="email"
              placeholder="Enter Practitioner E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
            <br/>
          <input
              type="text"
              placeholder="Enter Practitioner Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          <br/>
          <input
              type="text"
              placeholder="Enter Practitioner Speciality"
              name="speciality"
              value={speciality}
              onChange={e => onInputChange(e)}
            />
              <br/>
          <input
              type="text"
              placeholder="Enter Practitioner Department"
              name="department"
              value={department}
              onChange={e => onInputChange(e)}
            />
            <br/>
      <button className="button-container" type="submit">Add A practitioner</button>
        </form>
      </div>
        </div>
       );
};

export default AddPractitioner;