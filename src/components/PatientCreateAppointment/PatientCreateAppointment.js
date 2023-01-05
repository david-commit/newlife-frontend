import React from 'react';
import './PatientCreateAppointment.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function PatientCreateAppointment() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-create-appointment-container'>
        <h1>Book an appointment</h1>
      </div>
    </div>
  );
}

export default PatientCreateAppointment;
