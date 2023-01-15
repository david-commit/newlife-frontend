import React, { useState } from 'react';
import './Practitioner.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import { useHistory } from 'react-router-dom';

function Practitioner({loggedIn, userType}) {
  const history = useHistory()
  const [personalDetails, setPersonalDetails] = useState(JSON.parse(localStorage.getItem("person")).practitioner_profiles[0])

  if (loggedIn) {
    if (userType == "patient") {
      history.push('/patients/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  return (
    <div className='practitioner-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-details-dash-section'>
        <h1>{`Hi Dr. ${personalDetails?.last_name}`}
        </h1>
        <p>See your personal details below</p>
        <br />
        <div className='practitioner-details-section'>
          <p className='practitioner-details-title'>
            <span>Bio:&nbsp;</span>
          </p>

          <textarea readOnly id='bio'>{personalDetails?.bio}</textarea>
          <br />
          <p className='practitioner-details-title'>
            <span>Job title:&nbsp;</span>
            {personalDetails?.job_title}
          </p>
          <p className='practitioner-details-title'>
            <span>Department:&nbsp;</span>
            {JSON.parse(localStorage.getItem("person"))?.department?.name}
          </p>
          <p className='practitioner-details-title'>
            <span>Date of Birth:&nbsp;</span>
            {personalDetails?.dob}
          </p>
          <p className='practitioner-details-title'>
            <span>Phone:&nbsp;</span>
            {personalDetails?.phone_number}
          </p>
          <p className='practitioner-details-title'>
            <span>Email:&nbsp;</span>
            {JSON.parse(localStorage.getItem("person"))?.email}
          </p>
          {/* <p className='practitioner-details-title'>
            <span>Location:&nbsp;</span>
            Doonholm
          </p> */}
          {/* <p className='practitioner-details-title'>
            <span>Age:&nbsp;</span>
            34
          </p> */}
          {/* <p className='practitioner-details-title'>
            <span>Height:&nbsp;</span>2 meters
          </p> */}
          <p className='practitioner-details-title'>
            <span>Weight:&nbsp;</span>
            {personalDetails?.weight}
          </p>
          <p className='practitioner-details-title'>
            <span>BMI:&nbsp;</span>
            {personalDetails?.bmi}
          </p>
          <p className='practitioner-details-title'>
            <span>Blood Group:&nbsp;</span>
            {personalDetails?.blood_group}
          </p>
        </div>
      </div>
      <div className='practitioner-details-notification-section'>
        <h2>Notifications</h2>
        <div className='practitioner-details-notification'>
          <h4>Upcomming appointment (in 2hrs)</h4>
          <p>Dr. Grace Laura (Psychologist)</p>
          <hr />
        </div>
        <div className='practitioner-details-notification'>
          <h4>Upcomming appointment (in 3hrs)</h4>
          <p>Dr. Faith Ondiege (Nutritionist)</p>
          <hr />
        </div>
        <div className='practitioner-details-notification'>
          <h4>Upcomming appointment (in 3hrs)</h4>
          <p>Dr. Faith Ondiege (Nutritionist)</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Practitioner;
