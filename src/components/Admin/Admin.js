import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import CovidLineGraph from './Graph';
import './Admin.css';

// function Admin () {
const AllPractitioners = ({ loggedIn, userType }) => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  if (loggedIn) {
    if (userType == 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType == 'patient') {
      history.push('/patients/me');
    }
  } else {
    history.push('/login');
  }

  console.log('usertype: ', userType);

  useEffect(() => {
    console.log('Newlife Hospital');
  }, []);
  const loadUser = () => {
    const result = axios.get('http://localhost:3000/Practitioners');
    setUsers(result.data);
  };

  return (
    <div className='all-dashboards-main-container'>
      <AdminSidebar />
      <main class='main-container'>
        <div class='main-title'>
          <p class='font-weight-bold'>DASHBOARD</p>
        </div>

        <div class='main-cards'>
          <div class='card'>
            <div class='card-inner'>
              <p class='text-primary'>PRODUCTS IN STORE</p>
            </div>
            <span class='text-primary font-weight-bold'>
              129
            </span>
          </div>

          <div class='card'>
            <div class='card-inner'>
              <p class='text-primary'>ORDERS TO BE COMPLETED</p>
            </div>
            <span class='text-primary font-weight-bold'>3</span>
          </div>

          <div class='card'>
            <div class='card-inner'>
              <p class='text-primary'>AVAILABLE APPOINTMENTS</p>
            </div>
            <span class='text-primary font-weight-bold'>9</span>
          </div>

          <div class='card'>
            <div class='card-inner'>
              <p class='text-primary'>AVAILABLE PRACTITIONERS</p>
            </div>
            <span class='text-primary font-weight-bold'>11</span>
          </div>
          <div></div>
        </div>
        <div class='charts'>
          <div>
            <div className='chart-title'>
              Number of patients joining NewLife Hospital monthly
            </div>
            <br />
            <CovidLineGraph />
          </div>
        </div>
      </main>
      <div className='MainDash'></div>
    </div>
  );
};

// export default Admin;
export default AllPractitioners;
