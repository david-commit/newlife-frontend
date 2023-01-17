import React, { useEffect, useState } from 'react';
import './PractitionerChat.css';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import { useHistory } from 'react-router-dom';

function PractitionerChat({loggedIn, userType}) {
  const history = useHistory()
  const personId = JSON.parse(localStorage.getItem("person"))?.id
  const [chats, setChats] = useState(JSON.parse(localStorage.getItem("appointments")) || {});
  const [activeChat, setActiveChat] = useState(localStorage.getItem("activeChat") || "")
  const [message, setMessage] = useState('');

  if (loggedIn) {
    if (userType == "patient") {
      history.push('/patients/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  function updateAppointments(){
    const token = localStorage.getItem("token")
    const appointmentsApiEndpoint = `http://localhost:3000/practitioners/${personId}/appointments`

    fetch(appointmentsApiEndpoint, {
      headers: {
        "Accept": "application/json",
        "Authorization": token
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            const appointments = {}
            data.forEach((appointment, index) => {
              const chatTitle = `${index + 1} ${appointment?.appointment_type} (${appointment?.user?.email})`
              appointments[chatTitle] = appointment
            })
            localStorage.setItem("appointments", JSON.stringify(appointments))
            setChats(appointments)
          })
        } else {
          response.json().then(data => console.warn(data))
        }
      })
  }

  useEffect(() => {
    const intervalId = setInterval(updateAppointments, 1000)
    localStorage.setItem("intervalId", JSON.stringify(intervalId))
    return function(){
      clearInterval(intervalId)
    }
  }, []);

  function handleSendMessage(e){
    e.preventDefault();

    const messageData = {
      appointment_id: chats?.[activeChat]?.id,
      sender_id: chats?.[activeChat]?.practitioner?.id,
      sender_class: "Practitioner",
      receiver_id: chats?.[activeChat]?.user?.id,
      receiver_class: "User",
      content: message
    }

    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(messageData)
    }).then(res => {
      if(!res.ok){
        res.json().then(data =>{
          console.warn(data)
        })
      }else{
        setMessage('')
      }
    })
  };

  function handleChatPick(e){
    setActiveChat(e.target.value)
    localStorage.setItem("activeChat",e.target.value)
  }

  function messagesSorted(messages){
    const sortedMessages = messages.sort((a, b)=> {
      const aTime = (new Date(a.created_at)).getTime()
      const bTime = (new Date(b.created_at)).getTime()
      return aTime > bTime
    })

    return sortedMessages
  }

  return (
    <div className='practitioner-chat-main-container'>
      <PractitionerSideBar />
      <div className='practitioner-chat-container'>
        <h1>Practitioner Chat</h1>
        <br />
        <select onClick={handleChatPick}>
          <option hidden>{activeChat || "Select Chat"}</option>
          {Object.keys(chats)?.map((practitioner) => {
            return <option value={practitioner}>{practitioner}</option>;
          })}
        </select>
        <br />
        <br />
        <div className='practitioner-chats'>
          <section className='chat-messages'>
            {activeChat && chats[activeChat]?.messages?.length ? (
              messagesSorted(chats[activeChat]?.messages).map(message => {
                if(message.receiver_class == "Practitioner"){
                  return <div className='receiving-bubble'>{message.content}</div>
                } else if (message.receiver_class == "User"){
                  return <div className='sending-bubble'>{message.content}</div>                
                }
              })
            ) : (
              <h3>No messages</h3>
            )}
          </section>
          <form onSubmit={handleSendMessage}>
            <section className='practitioner-chat--static'>
              <input type='text' placeholder='Type message...' value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type='submit'>Send</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PractitionerChat;
