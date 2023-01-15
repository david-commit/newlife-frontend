import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
// import Graph from '../Graph/Graph';
import './Admin.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function Dashboard () {
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
              <span> <FontAwesomeIcon icon="fa-solid fa-shelves" /></span>
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