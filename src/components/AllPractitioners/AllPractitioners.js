import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AllPractitioners.css';

function AllPractitioners() {
  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='all-practitioners-container'>
        <h1>All Practitioners</h1>
      </div>
    </div>
  );
}

export default AllPractitioners;
