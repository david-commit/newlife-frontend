import React from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import "./PatientAppointments.css"

function PatientAppointments() {
  return (
    <div className='patient-appointments-main-container'>
      <PatientSidebar />
      <div className="patient-existing-appointments">
        <h1>Existing Appointments</h1>
      </div>
    </div>
  );
}

export default PatientAppointments