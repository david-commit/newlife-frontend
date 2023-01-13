import React, { useState } from 'react';
import './PatientDetailsPopup.css';
// https://react-responsive-modal.leopradel.com/?#custom-container
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';

function PatientDetailsPopup({loggedIn, userType, modalOpen, setModalOpen}) {
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
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

  const handlePatientDataSumbit = (e) => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone_number: phone,
        dob,
        location: address,
        bio,
        height,
        weight,
        blood_group: bloodGroup,
      }),
    });
  };

  return (
    <div id='patient-details-popup'>
      <Modal
        open={modalOpen}
        onClose={()=> setModalOpen(false)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Date of Birth <br />
              <input
                type='date'
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Address <br />
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Bio <br />
              <textarea
                type='text'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Height <br />
              <input
                type='text'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Weight <br />
              <input
                type='text'
                value={weight}
                onChange={(e) => setWeight(e.target.dvalue)}
                required
              />
            </label>{' '}
            <br />
            <br />
            <label>
              Blood Group <br />
              <input
                type='text'
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
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
