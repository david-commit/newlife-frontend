import AdminSidebar from '../AdminSidebar/AdminSidebar';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditPractitioner = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    history.push("/admin");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`, user);
    setUser(result.data);
  };
  return (
    <div className="all-practitioners-main-container">
        <AdminSidebar/>
      <div className='all-practitioners-container'>
        <h1>Edit A Practitioner</h1>
        <section className='th'>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <br/>
            <input
              type="text"
              placeholder="Enter Practitioner Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <br/>
            <input
              type="text"
              placeholder="Enter Practitioner UserName"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <br/>
            <input
              type="email"
              placeholder="Enter Practitioner Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <br/>
            <input
              type="text"
              placeholder="Enter the Practitioner Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
             <br/>
            <input
              type="text"
              placeholder="Enter the Practitioner Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br/>
          <button>Update A practitioner</button>
        </form>
        </section>
      </div>
    </div>
  );
};

export default EditPractitioner;
