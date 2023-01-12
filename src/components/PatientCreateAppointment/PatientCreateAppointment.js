import React from 'react';
import './PatientCreateAppointment.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function PatientCreateAppointment({loggedIn, userType}) {
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
      <div className='patient-create-appointment-container'>
        <h1>Book an appointment</h1>

        <form className='appointment-form'>
          <select>
            <option hidden>Select Doctor</option>
            <option>Dr. Grace Laura</option>
            <option>Dr. Grace Laura</option>
            <option>Dr. Grace Laura</option>
          </select>
          <select>
            <option hidden>Select type of appointment</option>
            <option>Consultation</option>
            <option>Dermatology</option>
            <option>Nutrition</option>
            <option>Pediatrics</option>
          </select>
          <input type='date' />
          <input type='time' />
          <textarea placeholder='Provide information on the apppointment'></textarea>
          <br />

          <div className='form-buttons'>
            <button type='submit'>Submit Request</button>
            
          </div>
        </form>
      </div>
    
    </div>
  );
}

export default PatientCreateAppointment;
