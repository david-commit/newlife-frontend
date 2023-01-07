import React from 'react';
import './AddPractitioner.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function AddPractitioner() {
  return (
    <div className='add-practitioners-main-container'>
      <AdminSidebar />
      <div className='add-practitioners-container'>
        <h1>Add Practitioner</h1>
      </div>
    </div>
  );
}

export default AddPractitioner;
