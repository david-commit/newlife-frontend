import React from 'react';
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
    <div>
      <PatientSidebar />
      PatientCalendar
    </div>
  );
}

export default PatientCalendar;
