import React from 'react';
import './Practitioner.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function Practitioner() {
  return (
    <div className='practitioner-main-container'>
      <PractitionerSideBar />
      Practitioner Details
    </div>
  );
}

export default Practitioner;
