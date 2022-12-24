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
          <h1 id='department-title'>Our Departments</h1>
      <div className='about-departments-main-container'>
        
        <div className='about-departments-container'>
          <div className='about-department-card'>
            <i class='fa-solid fa-hands-holding-child'></i>
            <section className='about-department-card-txt'>
              <h3>Pediatrics</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>
          <div className='about-department-card'>
            <i class='fa-solid fa-hands-holding-child'></i>
            <section className='about-department-card-txt'>
              <h3>Neurology</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-hand-holding-droplet'></i>
            <section className='about-department-card-txt'>
              <h3>Haematology</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-heart-pulse'></i>
            <section className='about-department-card-txt'>
              <h3>Cardiology</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-lungs'></i>
            <section className='about-department-card-txt'>
              <h3>X-Ray Diagnostic</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-user-doctor'></i>
            <section className='about-department-card-txt'>
              <h3>Consultation</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-microscope'></i>
            <section className='about-department-card-txt'>
              <h3>Laboratory Services</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>{' '}
          <div className='about-department-card'>
            <i class='fa-solid fa-truck-medical'></i>
            <section className='about-department-card-txt'>
              <h3>Emergency Services</h3>
              <p>
                Do you know of a doctor who can provide you with care? NewLife
                Hospital will offer you the best.
              </p>
            </section>
          </div>
        </div>
        <div className='about-working'>
          <h2>Opening Hours:</h2>
          <p>
            Do you know of a doctor who can provide you with care? NewLife
            Hospital will offer you the best.
          </p>
          <br />
          <p className='weekdays'>
            <span>Mon – Wed:</span> 9:00 AM - 7:00 PM{' '}
          </p>
          <p className='weekdays'>
            <span>Thursday:</span> 9:00 AM - 6:30 PM{' '}
          </p>
          <p className='weekdays'>
            <span>Friday:</span> 9:00 AM - 6:00 PM{' '}
          </p>
          <p className='weekdays'>
            <span>Sun - Sun:</span> CLOSED{' '}
          </p>
          <br />
          <h4>Need a personal health plan?</h4>
          <p>
            We offer you the best. <br />
            Give us a call: <br />
            Toll Free: 0812 345 678 <br /> Saf: +254 712 345 678 <br /> Air:
            +254 733 123 456
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
