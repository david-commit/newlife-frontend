import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import CovidLineGraph from './Graph'
import './Admin.css';



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
            </div>
            <span class="text-primary font-weight-bold">16</span>
          </div>
          <div>
          </div>
        </div>
        <div class="charts">
          <div>
          <CovidLineGraph />
        </div>
        </div>
        
      </main>
      <div className="MainDash">
    </div>
    </div>
  );
}

export default Dashboard;