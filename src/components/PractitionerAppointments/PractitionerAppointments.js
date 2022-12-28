import React from 'react'
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import './PractitionerAppointments.css';

function PractitionerAppointments() {
  return (
    <div className='practitioner-main-container'>
      <PractitionerSideBar />{' '}
      <div className='practitioner-existing-appointments'>
        <h1>Existing Appointments</h1>
      </div>
    </div>
  );
}

export default PractitionerAppointments