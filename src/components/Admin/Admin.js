import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import CovidLineGraph from './Graph';
import './Admin.css';

// function Admin () {
const AllPractitioners = ({ loggedIn, userType }) => {
  // const [users, setUsers] = useState([])
  const [pracs, setPracs] = useState([]);
  const [products, setProducts] = useState([]);
  const history = useHistory();
  // console.log(users)

  if (loggedIn) {
    if (userType === 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType === 'patient') {
      history.push('/patients/me');
    }
  } else {
    history.push('/login');
  }

  // const loadUser = () => {
  //   const result = axios.get('https://newlife-backend-production.up.railway.app/practitioner_profiles');
  //   setUsers(result.data);
  // };

  // Fetches all practitioners & Products
  useEffect(() => {
    fetch(`https://newlife-backend-production.up.railway.app/practitioner_profiles`)
      .then((r) => r.json())
      .then((d) => setPracs(d));

    fetch(`https://newlife-backend-production.up.railway.app/products`)
      .then((r) => r.json())
      .then((d) => setProducts(d));
  }, []);

  return (
    <div className='all-dashboards-main-container'>
      <AdminSidebar />
      <main class='main-container' className='all-dashboards-container'>
        <div class='main-title'>
          <h1 class='font-weight-bold'>DASHBOARD</h1>
        </div>

        <div class='main-cards'>
          <div class='card'>
            <div class='card-inner'>
              <p class='text-primary'>PRODUCTS IN STORE</p>
            </div>
            <span class='text-primary font-weight-bold'>{products.length}</span>
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
            <span class='text-primary font-weight-bold'>{pracs.length}</span>
          </div>
          <div></div>
        </div>
        <div class='charts'>
          <div>
            <div className='chart-title'>
              Number of patients joining NewLife Hospital monthly (as of 2022)
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
