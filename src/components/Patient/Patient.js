import React from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function Patient() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-details-dash-section'>
        <h1>Hi name,</h1>
        <p>See your personal details below</p>
        <div className="patient-details-section">
          <h1>Bio:</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Patient;
