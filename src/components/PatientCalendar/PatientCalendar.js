import React from 'react';
import './PatientCalendar.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function PatientCalendar() {
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
