import React, { useState } from 'react';
import './PatientDetailsPopup.css';
// https://react-responsive-modal.leopradel.com/?#custom-container
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useEffect } from 'react';

function PatientDetailsPopup() {
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [bloodGroup, setBloodGroup] = useState('');
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    onOpenModal();
  }, []);

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
        bmi,
        blood_group: bloodGroup,
      }),
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <div className='patient-details-popup-container'>
          <br />
          <br />
          <h1>Add Relevant Data</h1>
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
                onChange={(e) => setAddress(e.target.
                 requiredvalue)}
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
                onChange={(e) => setHeight(e.target.
                 requiredvalue)}
              />
            </label>
            <br />
            <br />
            <label>
              Weight <br />
              <input
                type='text'
                value={weight}
                onChange={(e) => setWeight(e.target.
                 requiredvalue)}
              />
            </label>{' '}
            <br />
            <br />
            <label>
              BMI <br />
              <input
                disabled
                value={bmi}
                onChange={(e) => setBMI(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Blood Group <br />
              <input
                type='text'
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.
                 requiredvalue)}
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
