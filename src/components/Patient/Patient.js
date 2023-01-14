import React, {useState} from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function Patient({loggedIn, userType}) {
  const [personalDetails, setPersonalDetails] = useState(JSON.parse(localStorage.getItem("person")).patient_profiles[0])
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  }else{
    history.push('/login')
  }

  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-details-dash-section'>
        <h1>{`Hi ${personalDetails?.first_name}`}</h1>
        <p>See your personal details below</p>
        <br />
        <div className='patient-details-section'>
          <p className='patient-details-title'>
            <span>Bio:</span>
          </p>

          <textarea >{personalDetails?.bio}</textarea>
          <br />

          <p className='practitioner-details-title'>
            <span>Date of Birth: </span>
            {personalDetails?.dob}
          </p>
          <p className='practitioner-details-title'>
            <span>Phone: </span>
            {personalDetails?.phone_number}
          </p>
          <p className='practitioner-details-title'>
            <span>Email: </span>
            {JSON.parse(localStorage.getItem("person"))?.email}
          </p>
          {/* <p className='practitioner-details-title'>
            <span>Location:</span>
            Nairobi
          </p>
          <p className='practitioner-details-title'>
            <span>Age:</span>
            35
          </p>
          <p className='practitioner-details-title'>
            <span>Height:</span>2 meters
          </p> */}
          <p className='practitioner-details-title'>
            <span>Weight: </span>
            {`${personalDetails?.weight}Kg`}
          </p>
          <p className='practitioner-details-title'>
            <span>BMI: </span>
            {personalDetails?.bmi}
          </p>
          <p className='practitioner-details-title'>
            <span>Blood Group: </span>
            {personalDetails?.blood_group}
          </p>
        </div>
      </div>
      <div className='patient-details-notification-section'>
        <h2>Notifications</h2>
        <div className='patient-details-notification'>
          <h4>Upcomming appointment (in 2hrs)</h4>
          <p>Dr. Grace Laura (Nutrionist)</p>
          
        </div>
        <div className='patient-details-notification'>
          <h4>Upcomming appointment (in 3hrs)</h4>
          <p>Dr. Laura Grace(Nutritionist)</p>
          
        </div>
        <div className='patient-details-notification'>
          <h4>Upcomming appointment (in 3hrs)</h4>
          <p>Dr. Laura Grace(Nutritionist)</p>
          
        </div>
      </div>
    </div>
  );
}

export default Patient;
