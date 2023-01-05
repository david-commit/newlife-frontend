import React from 'react';
import "./PractitionerSideBar.css"
import { NavLink } from 'react-router-dom';

function PractitionerSideBar() {
  return (
    <div className='practitioner-sidebar-nav-container'>
      <nav className='practitioner-sidebar-nav'>
        <NavLink exact to='/practitioners/me'>
          <i class='fa-solid fa-user'></i>&nbsp; Personal details
        </NavLink>
        <NavLink exact to='/practitioners/me/create-appointment'>
          <i class='fa-solid fa-calendar-plus'></i>&nbsp; Create appointment
        </NavLink>
        <NavLink exact to='/practitioners/me/appointments'>
          <i class='fa-solid fa-eye'></i>&nbsp; Existing appointments
        </NavLink>
        <NavLink exact to='/practitioners/me/chat'>
          <i class='fa-solid fa-message'></i>&nbsp; Start Messaging
        </NavLink>
        <NavLink exact to='/practitioners/me/reviews'>
          <i class='fa-solid fa-star'></i>&nbsp; Reviews
        </NavLink>
        <NavLink exact to='/practitioners/me/calendar'>
          Calendar
        </NavLink>
      </nav>
    </div>
  );
}

export default PractitionerSideBar;
