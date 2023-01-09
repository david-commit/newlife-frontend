import React from 'react';
import './ProductNotFound.css';
import { Link } from 'react-router-dom';

function ProductNotFound() {
  return (
    <div className='product-not-found-container'>
      <div className='not-found-img'>
        <h1>Product Not Found</h1>
        <br />
        <Link to="/">
          Return <i class='fa-solid fa-house'></i> 
        </Link>
      </div>
    </div>
  );
}

export default ProductNotFound;
