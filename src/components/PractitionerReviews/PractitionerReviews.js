import React from 'react';
import './PractitionerReviews.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import { useHistory } from 'react-router-dom';

function PractitionerReviews({loggedIn, userType}) {
  const history = useHistory()

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
    <div className='practitioner-reviews-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-reviews-container'>
        <h1>Practitioner Reviews</h1>
      </div>
    </div>
  );
}

export default PractitionerReviews;
