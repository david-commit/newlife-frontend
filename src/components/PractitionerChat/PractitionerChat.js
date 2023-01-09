import React from 'react';
import './PractitionerChat.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function PractitionerChat() {
  return (
    <div className='practitioner-chat-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-chat-container'>
        <h1>Practitioner Chat</h1>
      </div>
    </div>
  );
}

export default PractitionerChat;
