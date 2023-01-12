import React, { useEffect, useState } from 'react';
import './PatientChat.css';
import PatientSideBar from '../PatientSidebar/PatientSidebar';
import { useHistory } from 'react-router-dom';

function PatientChat({loggedIn, userType}) {
  const [patients, setPatients] = useState([
    'Patient 1',
    'Patient 2',
    'Patient 3',
  ]);
  const [messages, setMessages] = useState(true);
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  useEffect(() => {
    fetch('')
      .then((r) => r.json())
      .then((d) => setPatients(d));

    fetch('')
      .then((r) => r.json())
      .then((d) => setMessages(d));
  }, []);

  return (
    <div className='patient-chat-main-container'>
      <PatientSideBar />
      <div className='patient-chat-container'>
        <h1>Patient Chat</h1>
        <br />
        <select onChange={(e) => setPatients(e.target.value)}>
          <option hidden>Select Patient</option>
          {patients?.map((patient) => {
            return <option value=''>{patient}</option>;
          })}
        </select>
        <br />
        <br />
        <div className='patient-chats'>
          <section className='chat-messages'>
            {messages ? (
              <>
                <div className='receiving-bubble'>Sender message</div>

                <div className='sending-bubble'>receiver message</div>
                <div className='receiving-bubble'>Sender message</div>

                <div className='sending-bubble'>receiver message</div>
                <div className='receiving-bubble'>Sender message</div>

                <div className='sending-bubble'>receiver message</div>
                <div className='receiving-bubble'>Sender message</div>

                <div className='sending-bubble'>receiver message</div>
                <div className='receiving-bubble'>Sender message</div>

                <div className='sending-bubble'>receiver message</div>
                <div className='receiving-bubble'>
                  Sender message
                </div>

                <div className='sending-bubble'>
                  receiver message
                </div>
              </>
            ) : (
              <h3>No messages</h3>
            )}
          </section>
          <form>
            <section className='patient-chat--static'>
              <input type='text' placeholder='Type message...' />
              <button type='submit'>Send</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientChat;
