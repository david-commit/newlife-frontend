import React from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function Patient() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-details-dash-section'>
        <h1>Hi (patient name),</h1>
      </div>
    </div>
  );
}

export default Patient;
