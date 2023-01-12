import React from 'react';
import './PractitionerCalendar.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import { useHistory } from 'react-router-dom';

function PractitionerCalendar({loggedIn, userType}) {
  const history = useHistory()

  if (loggedIn) {
    if (userType == "patient") {
      history.push('/patients/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  return (
    <div className='practitioner-calendar-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-calendar-container'>
        <h1>Practitioner Calendar</h1>
      </div>
    </div>
  );
}

export default PractitionerCalendar;
