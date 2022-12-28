import React from 'react';
import './Practitioner.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function Practitioner() {
  return (
    <div className='practitioner-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-details-dash-section'>
        <h1>Hi Dr. Marcy,</h1>
        <p>See your personal details below</p>
        <br />
        <div className='practitioner-details-section'>
          <p className='practitioner-details-title'>
            <span>Bio:&nbsp;</span>
          </p>

          <textarea readOnly id='bio'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            alias, voluptatum vero eaque veniam inventore nihil possimus
            repellendus nemo commodi cupiditate eum praesentium incidunt odit
            tenetur consequatur corporis cumque id?
          </textarea>
          <br />
          <p className='practitioner-details-title'>
            <span>Department:&nbsp;</span>
            Pediatrics
          </p>
          <p className='practitioner-details-title'>
            <span>Date of Birth:&nbsp;</span>
            12/12/1998
          </p>
          <p className='practitioner-details-title'>
            <span>Phone:&nbsp;</span>
            +25412345678
          </p>
          <p className='practitioner-details-title'>
            <span>Email:&nbsp;</span>
            practitioner@newlife.com
          </p>
          <p className='practitioner-details-title'>
            <span>Location:&nbsp;</span>
            Doonholm
          </p>
          <p className='practitioner-details-title'>
            <span>Age:&nbsp;</span>
            34
          </p>
          <p className='practitioner-details-title'>
            <span>Height:&nbsp;</span>2 meters
          </p>
          <p className='practitioner-details-title'>
            <span>Weight:&nbsp;</span>
            68kg
          </p>
          <p className='practitioner-details-title'>
            <span>BMI:&nbsp;</span>
            18
          </p>
          <p className='practitioner-details-title'>
            <span>Blood Group:&nbsp;</span>
            O-
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
