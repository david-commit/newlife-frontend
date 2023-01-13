import React, {useState, useEffect} from 'react';
import './PatientCreateAppointment.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function PatientCreateAppointment({loggedIn, userType}) {
  const [practitioners, setPractitioners] = useState(JSON.parse(localStorage.getItem("practitioners")) || [])
  const [formData, setFormData] = useState({
    user_id: JSON.parse(localStorage.getItem("person"))?.id,
    practitioner_id: "",
    date: "",
    approved: false,
    appointment_type: "",
    appointment_info: "",
    time: ""
  })
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

  useEffect(() => {
    fetch("http://127.0.0.1:3000/practitioners", {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            localStorage.setItem("practitioners", JSON.stringify(data))
            setPractitioners(data)
          })
        } else {
          res.json().then(data => console.warn(data))
        }
      })
  }, [])

  function handleSubmitAppoitmentRequest(e){
    e.preventDefault()

    fetch("http://127.0.0.1:3000/appointments", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if(!res.ok){
        res.json().then(data => console.warn(data))
      }else{
        
      }
    })  
  }

  function handleInputChange(e){
    setFormData(formData => ({...formData, [e.target.id]: e.target.value}))
    console.log("form data: ", formData)
  }

  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-create-appointment-container'>
        <h1>Book an appointment</h1>

        <form className='appointment-form' onSubmit={handleSubmitAppoitmentRequest}>
          <select id="practitioner_id" onChange={handleInputChange}>
            <option hidden>Select Doctor</option>
            {
              practitioners.map(practitioner => {
                const department = practitioner.department?.name
                const firstName = practitioner.practitioner_profiles[0]?.first_name
                const lastName = practitioner.practitioner_profiles[0]?.last_name
                const practitionerId = practitioner?.id
 
                return (
                  <option value={practitionerId}>
                    {`Dr. ${firstName} ${lastName} (${department} Department)`}
                  </option>
                )
              })
            }
          </select>
          <select id="appointment_type" onChange={handleInputChange}>
            <option hidden>Select type of appointment</option>
            <option value="Consultation">Consultation</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
          <input id="date" type='date' onChange={handleInputChange} value={formData.date} />
          <input id="time" type='time' onChange={handleInputChange} value={formData.time}/>
          <textarea id="appointment_info" onChange={handleInputChange} value={formData.appointment_info} placeholder='Provide information on the apppointment'>

          </textarea>
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
