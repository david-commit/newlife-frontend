import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='about-main-container'>
      <div className='about-title-banner'>About Us</div>
      <div className='about-floating-banner'>
        <div className='about-floating-banner-cell'>
          <h4>Qualified Doctors</h4>
          <h2>WHERE PEOPLE COME FIRST</h2>
          <p>
            Do you know of a doctor who can provide you with care? NewLife
            Hospital will offer you the best.
          </p>
        </div>
        <hr className='about-hr' />
        <div className='about-floating-banner-cell'>
          <h4>Quality Service</h4>
          <h2>HIGHEST QUALITY CARE</h2>
          <p>
            Do you know of a doctor who can provide you with care? NewLife
            Hospital will offer you the best.
          </p>
        </div>
        <hr className='about-hr' />
        <div className='about-floating-banner-cell'>
          <h4>Here For You</h4>
          <h2>EMERGENCY DEPARTMENT</h2>
          <p>
            Do you know of a doctor who can provide you with care? NewLife
            Hospital will offer you the best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
