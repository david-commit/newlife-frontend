import React from 'react';
import './Patient.css';

function Patient() {
  return (
    <div className='patient-main-container'>
      
      <div className='patient-details-dash-section'>
        <h1>Hi John,</h1>
        
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
           
          </p>
          <p className='practitioner-details-title'>
            <span>Phone:</span>
            +254798765432
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
            34
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
           
          </p>
          <p className='practitioner-details-title'>
            <span>Blood Group:</span>
            O-
          </p>
        </div>
      </div>
    </div>
  );
}

export default Patient;
