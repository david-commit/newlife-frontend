import React from 'react';
import './PractitionerReviews.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function PractitionerReviews() {
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
