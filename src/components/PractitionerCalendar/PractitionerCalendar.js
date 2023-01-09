import React from 'react';
import './PractitionerCalendar.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function PractitionerCalendar() {
  return (
    <div className='practitioner-calendar-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-calendar-container'>
        <h1>Practitioner Calendar</h1>
      </div>
    </div>
  );
}

export default PractitionerCalendar;
