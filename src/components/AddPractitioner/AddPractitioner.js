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
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
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
        <h1>Add A Practitioner</h1>
        <form onSubmit={e => onSubmit(e)}>
                    <input
              type="text"
              placeholder="Enter Practitioner Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
                             <input
              type="text"
              placeholder="Enter Practitioner Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
                             <input
              type="email"
              placeholder="Enter Practitioner E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
                             <input
              type="text"
              placeholder="Enter Practitioner Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
                             <input
              type="text"
              placeholder="Enter Practitioner Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
      <button type="submit">Add A practitioner</button>
        </form>
      </div>
        </div>
       );
};

export default AddPractitioner;