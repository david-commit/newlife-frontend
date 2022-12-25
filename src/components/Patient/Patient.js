import React from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function Patient() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-details-dash-section'>
        <h1>Hi name,</h1>
        <p>See your personal details below</p>
        <br />
        <div className='patient-details-section'>
          <p className='patient-details-title'>
            <span>Bio:&nbsp;</span>
          </p>

          <textarea readOnly id='bio'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            alias, voluptatum vero eaque veniam inventore nihil possimus
            repellendus nemo commodi cupiditate eum praesentium incidunt odit
            tenetur consequatur corporis cumque id?
          </textarea>
          <br />

          <p className='patient-details-title'>
            <span>Age:&nbsp;</span>
            34
          </p>
          <p className='patient-details-title'>
            <span>Height:&nbsp;</span>2 meters
          </p>
          <p className='patient-details-title'>
            <span>Weight:&nbsp;</span>
            68kg
          </p>
          <p className='patient-details-title'>
            <span>BMI:&nbsp;</span>
            18
          </p>
          <p className='patient-details-title'>
            <span>Blood Group:&nbsp;</span>
            O-
          </p>
        </div>
      </div>
      <div className='patient-details-notification-section'>
        <h2>Notifications</h2>
        <div className='patient-details-notification'>
          <h4>Upcomming appointment (in 2hrs)</h4>
          <p>Dr. Grace Laura (Psychologist)</p>
          <hr />
        </div>
        <div className='patient-details-notification'>
          <h4>Upcomming appointment (in 3hrs)</h4>
          <p>Dr. Faith Ondiege (Nutritionist)</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Patient;
