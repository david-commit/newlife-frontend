import React from 'react';
import './AllProducts.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function AllProducts() {
  return (
    <div className='all-products-main-container'>
      <AdminSidebar />
      <div className='all-products-container'>
        <h1>All Products</h1>
      </div>
    </div>
  );
}

export default AllProducts;
