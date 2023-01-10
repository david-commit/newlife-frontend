import React from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import "./PatientAppointments.css"

function PatientAppointments() {
  return (
    <div className='patient-appointments-main-container'>
      <PatientSidebar />
      <div className="patient-existing-appointments">
        <h1>Existing Appointments</h1>

        <div className='patients-appointments'>
          <br></br>
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>

          <div className='form-buttons'>
            <button type='View'>View </button>
            <button type='Delete'>Delete</button>
          </div>
          
        <div className='patients-appointments'>
          <br></br>
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>

          <div className='form-buttons'>
            <button type='View'>View </button>
            <button type='Delete'>Delete</button>
          </div>
        </div>
        
        <div className='patients-appointments'>
          <br></br>
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>

          <div className='form-buttons'>
            <button type='View'>View </button>
            <button type='Delete'>Delete</button>
          </div>
        </div>
        
        <div className='patients-appointments'>
          <br></br>
          <p><h3>Dr. Grace Laura - General Consultation</h3>
          <h4>2:00pm</h4></p>

          <div className='form-buttons'>
            <button type='View'>View </button>
            <button type='Delete'>Delete</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PatientAppointments