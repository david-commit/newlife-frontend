import React, { useEffect, useState } from 'react'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import "./PatientAppointments.css"
import { useHistory } from 'react-router-dom';

function PatientAppointments({loggedIn, userType}) {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("person") ||false)?.appointments || []
  )
  const history = useHistory()

  console.log("appointments: ", appointments)

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  useEffect(()=>{
    const token = localStorage.getItem("token")
    const personId = JSON.parse(localStorage.getItem("person") || false)?.id
    const appointmentsApiEndpoint = `http://localhost:3000/users/${personId}/appointments`

    fetch(appointmentsApiEndpoint, {
      headers: {
        "Accept": "application/json",
        "Authorization": token
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            setAppointments(
              data.map(appointment => {
                return {
                  departmentName: appointment.practitioner?.department?.name,
                  practitionerLastName: appointment.practitioner?.last_name,
                  appointmentTime: appointment.time,
                  appointmentType: appointment.appointment_type
                }
              })
            )
          })
        } else {
          response.json().then(data => console.warn(data))
        }
      })
  }, [])

  return (
    <div className='patient-appointments-main-container'>
      <PatientSidebar loggedIn={loggedIn} userType={userType} />
      <div className="patient-existing-appointments">
        <h1>Existing Appointments</h1>

        {
          appointments.map(appointment => {
            return (
              <div className='patients-appointments'>
                <br></br>
                <p>
                  <h3>{`${appointment.appointmentType}`}</h3>
                  <p>
                    {`(Dr. ${appointment.practitionerLastName}, ${appointment.departmentName} Department))`}
                  </p>
                  <h4>{`${appointment.appointmentTime}` }</h4></p>
                <button type='View'>View </button>
                <button type='Delete'>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PatientAppointments