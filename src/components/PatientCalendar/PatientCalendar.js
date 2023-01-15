import React from 'react';
import './PatientCalendar.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function PatientCalendar({loggedIn, userType}) {
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  return (
    <div className='patient-calendar-main-container'>
      <PatientSidebar />
      <div className='patient-calendar-container'>
      <h1>Patient Calendar</h1>
    </div>
    </div>
  );
}

export default PatientCalendar;
