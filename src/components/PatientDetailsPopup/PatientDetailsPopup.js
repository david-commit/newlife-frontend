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

  const handlePatientDataSumbit = (e) => {
    e.preventDefault();
    const personId = person?.id
    const profileId = person?.patient_profiles[0]?.id

    if(personId && profileId){
      fetch(`http://127.0.0.1:3000/patient_profiles/${personId}`, {
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
          <br />
          <br />
          <h1>Edit Details</h1>
          <form
            onSubmit={handlePatientDataSumbit}
            className='patient-details-form-popup'
          >
            {' '}
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
              BMI <br />
              <input
                id='bmi'
                type='text'
                value={personDetails.bmi}
                onChange={modifyFormInput}
                required
              />
            </label>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default PatientDetailsPopup;
