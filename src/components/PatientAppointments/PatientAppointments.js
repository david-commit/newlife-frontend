import React, { useEffect } from 'react'
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

  useEffect(()=> {

  }, [])

  return (
    <div className='patient-appointments-main-container'>
      <PatientSidebar loggedIn={loggedIn} userType={userType} />
      <div className="patient-existing-appointments">
        <h1>Existing Appointments</h1>

        {/* {
          practitioners.map(practitioner => {
            const department = practitioner.department?.name
            const lastName = practitioner.practitioner_profiles[0]?.last_name

            return (
              <div className='patients-appointments'>
                <br></br>
                <p><h3>{`Dr. ${lastName} (${department} Department)`}</h3>
                  <h4>2:00pm</h4></p>
                <button type='View'>View </button>
                <button type='Delete'>Delete</button>
              </div>
            )
          }).slice(0, 5)
        } */}
      </div>
    </div>
  );
}

export default PatientAppointments