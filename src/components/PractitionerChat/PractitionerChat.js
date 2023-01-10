import React, { useEffect, useState } from 'react';
import './PractitionerChat.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';

function PractitionerChat() {
  const [practitioners, setPractitioners] = useState([
    'Practitioner 1',
    'Practitioner 2',
    'Practitioner 3',
  ]);
  const [messages, setMessages] = useState(true);

  useEffect(() => {
    fetch('')
      .then((r) => r.json())
      .then((d) => setPractitioners(d));

    fetch('')
      .then((r) => r.json())
      .then((d) => setMessages(d));
  }, []);

  return (
    <div className='practitioner-chat-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-chat-container'>
        <h1>Practitioner Chat</h1>
        <br />
        <select onChange={(e) => setPractitioners(e.target.value)}>
          <option hidden>Select Practitioner</option>
          {practitioners?.map((practitioner) => {
            return <option value=''>{practitioner}</option>;
          })}
        </select>
        <br />
        <br />
        <div className='practitioner-chats'>
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
                  Sender message Sender message
                </div>

                <div className='sending-bubble'>
                  receiver messag euuygyyug qwertyu
                </div>
              </>
            ) : (
              <h3>No messages</h3>
            )}
          </section>
          <form>
            <section className='practitioner-chat--static'>
              <input type='text' placeholder='Type message...' />
              <button type='submit'>Send</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PractitionerChat;
