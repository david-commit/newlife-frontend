import React from 'react'
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import './PractitionerAppointments.css';
import { useHistory } from 'react-router-dom';

function PractitionerAppointments({loggedIn, userType}) {
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
    <div className='practitioner-main-container'>
      <PractitionerSideBar />{' '}
      <div className='practitioner-existing-appointments'>
        <h1>Existing Appointments</h1>
      </div>
    </div>
  );
}

export default PractitionerAppointments