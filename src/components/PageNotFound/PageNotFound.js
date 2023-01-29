import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='page-not-found-container'>
      <div className='not-found-img'>
        <h1>Page Not Found</h1>
        <br />
        <Link to="/">
          Return <i class='fa-solid fa-house'></i> 
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
