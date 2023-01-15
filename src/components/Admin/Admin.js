import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
// import Graph from '../Graph/Graph';
import './Admin.css';

function Dashboard () {
  const AllPractitioners = ({loggedIn, userType}) => {
  const [users,setUsers] = useState([]);
    const history = useHistory()

    if (loggedIn) {
      if (userType == "practitioner") {
        history.push('/practitioners/me')
      } else if (userType == "patient") {
        history.push('/patients/me')
      }
    } else {
      history.push('/login')
    }

    console.log("usertype: ", userType)


  useEffect(()=>{
    console.log("Newlife Hospital");
  },[]);
  const loadUser = () =>{
    const result = axios.get("http://localhost:3000/Practitioners");
    setUsers(result.data);
  }

  return (
    <div className='all-dashboards-main-container'>
      <AdminSidebar />
      <main class="main-container">
        <div class="main-title">
          <p class="font-weight-bold">DASHBOARD</p>
        </div>

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">PRODUCTS IN STORE</p>
            </div>
            <span class="text-primary font-weight-bold">249</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">ORDERS TO BE COMPLETED</p>
            </div>
            <span class="text-primary font-weight-bold">3</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">AVAILABLE APPOINTMENTS</p>
            </div>
            <span class="text-primary font-weight-bold">9</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">AVAILABLE PRACTITIONERS</p>
              <span> Available</span>
            </div>
            <span class="text-primary font-weight-bold">16</span>
          </div>
          {/* <Graph /> */}
        </div>

        <div class="charts">

          <div class="charts-card">
            <p class="chart-title">Top 5 Products</p>
            <div id="bar-chart"></div>
          </div>

          <div class="charts-card">
            <p class="chart-title">Purchase and Sales Orders</p>
            <div id="area-chart"></div>
          </div>

        </div>
        
      </main>
      <div className="MainDash">
    </div>
    </div>
  );
}

export default Dashboard;