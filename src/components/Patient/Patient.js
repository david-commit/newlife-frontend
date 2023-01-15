import React from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function Patient({loggedIn, userType}) {
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

          <p className='patient-details-title'>
            <span>Date of Birth:</span>&nbsp;
           01/01/1988
          </p>
          <p className='patient-details-title'>
            <span>Phone:</span>&nbsp;
            +254709876543
          </p>
          <p className='patient-details-title'>
            <span>Email:</span>&nbsp;
           john@newlife.com
          </p>
          <p className='patient-details-title'>
            <span>Location:</span>&nbsp;
            Nairobi
          </p>
          <p className='patient-details-title'>
            <span>Age:</span>&nbsp;
            35
          </p>
          <p className='patient-details-title'>
            <span>Height:</span>&nbsp;2 meters
          </p>
          <p className='patient-details-title'>
            <span>Weight:&nbsp;</span>
            76kg
          </p>
          <p className='patient-details-title'>
            <span>BMI:&nbsp;</span>
            19
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
          <h4>Upcoming appointment (in 2hrs)</h4>
          <p>Dr. Grace Laura (Nutrionist)</p>
          <br></br>
        </div>
        <div className='patient-details-notification'>
          <h4>Upcoming appointment (in 3hrs)</h4>
          <p>Dr. Laura Grace(Nutritionist)</p>
          <br></br>

        </div>
        <div className='patient-details-notification'>
          <h4>Upcoming appointment (in 3hrs)</h4>
          <p>Dr. Laura Grace(Nutritionist)</p>
          <br></br>
          
        </div>
      </div>
    </div>
  );
}

export default Patient;
