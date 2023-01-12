import React from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function PatientReviews({loggedIn, userType}) {
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
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-existing-appointments'>
        <h1>Your Practitioner Reviews</h1>
      </div>
    </div>
  );
}

export default PatientReviews