import React, { useState, useEffect } from 'react'
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import './PractitionerAppointments.css';
import { useHistory } from 'react-router-dom';

function PractitionerAppointments({loggedIn, userType}) {
  const history = useHistory()
  // =========================
  const token = localStorage.getItem('token');
  const personId = JSON.parse(localStorage.getItem('person') || false)?.id;
  const appointmentsApiEndpoint = `https://newlife-backend-production.up.railway.app/practitioners/${personId}/appointments`;
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('person') || false)?.appointments || []
  );
  // =========================

  if (loggedIn) {
    if (userType == "patient") {
      history.push('/patients/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  // ===========================
  useEffect(() => {
    fetch(appointmentsApiEndpoint, {
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setAppointments(
            data.map((appointment) => {
              return {
                userFirstName: appointment.user?.first_name,
                userLastName: appointment.user?.last_name,
                email: appointment.user?.email,
                time: appointment.time,
                date: appointment.date,
                type: appointment.appointment_type,
                info: appointment.appointment_info,
                id: appointment.id,
              };
            })
          );
        });
      } else {
        response.json().then((data) => console.warn(data));
      }
    });
  }, []);

  function handleDeleteAppointment(deletedAppointment) {
    fetch(`https://newlife-backend-production.up.railway.app/appointments/${deletedAppointment.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    }).then((res) => {
      if (res.ok) {
        setAppointments((appointments) => {
          return appointments.filter(
            (appointment) => appointment.id != deletedAppointment.id
          );
        });
      } else {
        res.json().then((data) => console.warn(data));
      }
    });
  }
  // ===========================

  return (
    <div className='practitioner-main-container'>
      <PractitionerSideBar />{' '}
      <div className='practitioner-existing-appointments'>
        <h1>Existing Appointments</h1>

        {
          appointments.map(appointment => {
            console.log(appointment)
            return (
              <div className='practitioner-appointments'>
                <br></br>
                <p>
                  <h3>{`${appointment.type}`}</h3>
                  <p>
                    {`${appointment.userFirstName} ${appointment.userLastName} (${appointment.email})`}
                  </p>
                  <h4>{`Date: ${appointment.date} | Time: ${appointment.time}`}</h4></p>
                {/* <button type='View'>View </button> */}
                <button type='Delete' onClick={() => handleDeleteAppointment(appointment)}>Delete</button>
                <hr />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PractitionerAppointments