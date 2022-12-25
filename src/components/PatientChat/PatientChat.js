import React from 'react';
import './PatientChat.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function PatientChat() {
  return (
    <div className='patient-chat-container'>
      <PatientSidebar />
      <div className='patient-chat'>
        <h1>Messages</h1>
      </div>
    </div>
  );
}

export default PatientChat;
