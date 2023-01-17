import React, { useState } from 'react';
import './PatientDetailsPopup.css';
// https://react-responsive-modal.leopradel.com/?#custom-container
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';

function PatientDetailsPopup({ loggedIn, userType, modalOpen, setModalOpen, personDetails, setPersonDetails}) {
  const person = JSON.parse(localStorage.getItem("person") || false)
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

  function modifyFormInput(e){
    setPersonDetails(personDetails=> ({...personDetails, [e.target.id]: e.target.value}))
  }

  function updatePersonProfile(profileId){
    fetch(`http://127.0.0.1:3000/patient_profiles/${profileId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(personDetails)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setModalOpen(false)
            const newProfileDetails = {...person.patient_profiles[0], ...data}
            const newPersonDetails = {...person, patient_profiles: [newProfileDetails]}
            localStorage.setItem("person", JSON.stringify(newPersonDetails))
          })
        } else {
          res.json().then(data => console.warn(data))
        }
      })
  }

  function addNewProfile(personId){
    fetch(`http://127.0.0.1:3000/patient_profiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify({...personDetails, user_id: personId})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setModalOpen(false)
            const newProfileDetails = data
            const newPersonDetails = {...person, patient_profiles: [newProfileDetails]}
            localStorage.setItem("person", JSON.stringify(newPersonDetails))
          })
        } else {
          res.json().then(data => console.warn(data))
        }
      })   
  }

  const handlePatientDataSumbit = (e) => {
    e.preventDefault();
    const personId = person?.id
    const profileId = person?.patient_profiles?.[0]?.id

    if(personId && profileId){
      updatePersonProfile(profileId)
    }else if(personId && !profileId){
      addNewProfile(personId)
    }else{
      console.warn("Couldn't find person id. Are you even logged in?")
    }
  };

  return (
    <div id='patient-details-popup'>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <div className='patient-details-popup-container'>
              <h1>Edit Details</h1>
          <form
            onSubmit={handlePatientDataSumbit}
            className='patient-details-form-popup'
          >
            {' '}
            <br />
            <br />
            <label>
              First Name <br />
              <input
                id='first_name'
                type='text'
                value={personDetails.first_name}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Last Name <br />
              <input
                id='last_name'
                type='text'
                value={personDetails.last_name}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Phone <br />
              <input
                type='tel'
                id='phone_number'
                value={personDetails.phone_number}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Date of Birth <br />
              <input
                id='dob'
                type='date'
                value={personDetails.dob}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Bio <br />
              <textarea
                id="bio"
                type='text'
                value={personDetails.bio}
                onChange={modifyFormInput}
              />
            </label>
            <br />
            <br />
            <label>
              Height <br />
              <input
                id='height'
                type='text'
                value={personDetails.height}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Weight <br />
              <input
                id='weight'
                type='text'
                value={personDetails.weight}
                onChange={modifyFormInput}
                required
              />
            </label>{' '}
            <br />
            <br />
            <label>
              Blood Group <br />
              <input
                id='blood_group'
                type='text'
                value={personDetails.blood_group}
                onChange={modifyFormInput}
                required
              />
            </label>
            <br />
            <br />
            <button type='submit'>Submit Data</button>
          </form>
          <br />
        </div>
      </Modal>
      <br />
      <br />
    </div>
  );
}

export default PatientDetailsPopup;
