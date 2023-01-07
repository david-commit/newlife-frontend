import React from 'react';
import './AddProduct.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function AddProduct() {
  return (
    <div className='add-product-main-container'>
      <AdminSidebar />
      <div className='add-product-container'>
        <h1>Add Product</h1>
      </div>
    </div>
  );
}

export default AddProduct;
