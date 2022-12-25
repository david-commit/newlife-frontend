import React from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function PatientReviews() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-existing-appointments'>
        <h1>Your Practitioner Reviews</h1>
      </div>
    </div>
  );
}

export default PatientReviews