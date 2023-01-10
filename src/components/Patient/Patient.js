import React from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function Patient() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-details-dash-section'>
        <h1>Hi John,</h1>
        <p>See your personal details below</p>
        <br />
        <div className='patient-details-section'>
          <p className='patient-details-title'>
            <span>Bio:</span>
          </p>

          <textarea >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            alias, voluptatum vero eaque veniam inventore nihil possimus
            repellendus nemo commodi cupiditate eum praesentium incidunt odit
            tenetur consequatur corporis cumque id?
          </textarea>
          <br />

          <p className='practitioner-details-title'>
            <span>Date of Birth:</span>
           01/01/1988
          </p>
          <p className='practitioner-details-title'>
            <span>Phone:</span>
            +254709876543
          </p>
          <p className='practitioner-details-title'>
            <span>Email:</span>
           john@newlife.com
          </p>
          <p className='practitioner-details-title'>
            <span>Location:</span>
            Nairobi
          </p>
          <p className='practitioner-details-title'>
            <span>Age:</span>
            35
          </p>
          <p className='practitioner-details-title'>
            <span>Height:</span>2 meters
          </p>
          <p className='practitioner-details-title'>
            <span>Weight:</span>
            76kg
          </p>
          <p className='practitioner-details-title'>
            <span>BMI:</span>
            19
          </p>
          <p className='practitioner-details-title'>
            <span>Blood Group:</span>
            O-
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
