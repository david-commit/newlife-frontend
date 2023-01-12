import React from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import "./PatientAppointments.css"
import { useHistory } from 'react-router-dom';

function PatientAppointments({loggedIn, userType}) {
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
    <div className='patient-appointments-main-container'>
      <PatientSidebar loggedIn={loggedIn} userType={userType} />
      <div className="patient-existing-appointments">
        <h1>Existing Appointments</h1>

        <div className='patients-appointments'>
          <br></br>
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>
          <button type='View'>View </button>
            <button type='Delete'>Delete</button>
            
          
        <div className='patients-appointments'>
          
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>
          <button type='View'>View </button>
            <button type='Delete'>Delete</button>
         
        </div>
        
        <div className='patients-appointments'>
        
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>
          <button type='View'>View </button>
            <button type='Delete'>Delete</button>

         
          
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default PatientAppointments