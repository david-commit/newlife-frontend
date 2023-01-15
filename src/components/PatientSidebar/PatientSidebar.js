import React from 'react'
import './PatientSidebar.css';
import { NavLink } from 'react-router-dom';


function PatientSidebar({loggedIn, userType}) {
  return (
    <div className='patient-sidebar-nav-container'>
      <nav className='patient-sidebar-nav'>
        <NavLink exact to='/patients/me'>
          <i class='fa-solid fa-user'></i>&nbsp; Personal details
        </NavLink>
        <NavLink exact to='/patients/me/create-appointment'>
          <i class='fa-solid fa-calendar-plus'></i>&nbsp; Create appointment
        </NavLink>
        <NavLink exact to='/patients/me/appointments'>
          <i class='fa-solid fa-eye'></i>&nbsp; Existing appointments
        </NavLink>
        <NavLink exact to='/patients/me/chat'>
          <i class='fa-solid fa-message'></i>&nbsp; Start Messaging
        </NavLink>
        <NavLink exact to='/patients/me/reviews'>
          <i class='fa-solid fa-star'></i>&nbsp; Reviews
        </NavLink>
        <NavLink exact to='/patients/me/calendar'>
          <i class='fa-solid fa-calendar'></i>&nbsp; Calendar
        </NavLink>
      </nav>
    </div>
  );
}

export default PatientSidebar