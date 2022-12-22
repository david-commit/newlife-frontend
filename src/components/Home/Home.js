import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import welcomeImg from '../../img/dark-female-doctor.png';
import signature from '../../img/signature.png';
import testImg1 from '../../img/rev-img-1.jpg';
import testImg2 from '../../img/rev-img-2.jpg';
import testImg3 from '../../img/rev-img-3.jpg';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-banner-container-text'>
          <h3>WELCOME TO OUR HOSPITAL</h3>
          <br />
          <h1>TAKE CARE OF YOUR HEALTH</h1>
          <br />
          <p>
            A community in which all people achieve their full potential for
            health and well-being across the lifespan. We work to be trusted by
            patients, a valued partner in the community, and creators of
            positive change.
          </p>
          <br />
          <Link to='/aboutus'>
            <button type='button'>About Us</button>
          </Link>
        </div>
      </div>
      <div className='home-welcome-banner'>
        <img src={welcomeImg} alt='Welocome' />
        <div className='home-welcome-banner-text'>
          <h3>WELCOME TO NEWLIFE HOSPITAL</h3>
          <br />
          <h1>Complete Medical Solutions in One Place</h1>
          <br />
          <p>
            A community in which all people achieve their full potential for
            health and well-being across the lifespan. We work to be trusted by
            patients, a valued partner in the community, and creators of
            positive change. <br />
            <br />
            Randon Wakesho, Head of Clinic
          </p>
          <br />
          <img src={signature} alt='Signatory' />
        </div>
      </div>
      <div className='home-solutions-container'>
        <div className='home-solution'>
          <h1>Total Health Care Solutions</h1>
          <br />
          <p>
            Newlife Hospital App simplifies medical processes, but it also holds
            the potential to improve the patient experience significantly.
            Health care app development brings a myriad of advantages to the
            forefront. Health data accessibility is improved, remote health
            delivery is increased, medical errors are minimized, expenses are
            reduced, communication is enhanced – and the list goes on and on.
            Healthcare app development is now a critical component toward
            increased patient satisfaction.
          </p>
          <div className='home-solution-cards'>
            <div className='home-solution-card'>
              <div className='home-solution-card-img'>
                <i class='fa-solid fa-hands-holding-child'></i>
              </div>
              <br />
              <h3>PEDIATRICS</h3>
              <br />
              <p>
                Schedule an appointment with the best Pediatrician doctors,
                specialized in Pediatrics, New Born, Natural Breast Feeding and
                many more.
              </p>
            </div>
            <div className='home-solution-card'>
              <div className='home-solution-card-img'>
                <i class='fa-solid fa-hand-holding-droplet'></i>
              </div>
              <br />
              <h3>HAEMATOLOGY</h3>
              <br />
              <p>
                Schedule an appointment with the best Pediatrician doctors,
                specialized in Pediatrics, New Born, Natural Breast Feeding and
                many more.
              </p>
            </div>
            <div className='home-solution-card'>
              <div className='home-solution-card-img'>
                <i class='fa-solid fa-heart-pulse'></i>
              </div>
              <br />
              <h3>CARDIOGRAM</h3>
              <br />
              <p>
                Schedule an appointment with the best Pediatrician doctors,
                specialized in Pediatrics, New Born, Natural Breast Feeding and
                many more.
              </p>
            </div>
            <div className='home-solution-card'>
              <div className='home-solution-card-img'>
                <i class='fa-solid fa-truck-medical'></i>
              </div>
              <br />
              <h3>EMERGENCY HELP</h3>
              <br />
              <p>
                Schedule an appointment with the best Pediatrician doctors,
                specialized in Pediatrics, New Born, Natural Breast Feeding and
                many more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-practices-container'>
        <div className='home-practices'>
          <h3>BEST PRACTICES</h3>
          <br />
          <h1>Facility with Innovative Approach to Treatment</h1>
          <br />
          <p>
            NewLife Hospital App simplifies medical processes, but it also holds
            the potential to improve the patient experience significantly.
            Health care app development brings a myriad of advantages to the
            forefront. Health data accessibility is improved, remote health
            delivery is increased, medical errors are minimized.
          </p>
          <br />

          <h3>Highest Quality Care</h3>
          <p>
            <span style={{ color: '#1d3e68' }}>&#12299;</span>Patients have the
            opportunity to book appointments with a practitioner of their choice
            <br />
            <span style={{ color: '#1d3e68' }}>&#12299;</span>E-commerce
            platform that provides basic medical supplies
            <br />
            <span style={{ color: '#1d3e68' }}>&#12299;</span>We guarantee
            patient confidentiality by keeping all records private
          </p>
          <br />
          <Link to='/appointments'>
            <button type='button'>Book Appointment</button>
          </Link>
        </div>
      </div>
      <div className='home-testimonials-container'>
        <div className='home-testimonials'>
          <h1>What Our Patients Say</h1>
          <br />
          <p>
            Every month, NewLife Hospital receives masses of kind comments,
            letters and e-mails from patients about the positive experience they
            have: Below is a selection of these comments:
          </p>
        </div>
        <div className='home-testimonial-cards'>
          <div className='home-testimonial-card'>
            <img src={testImg1} alt='Test' /><br />
            <p>
              Kind, friendly staff from the minute we walked in, felt very safe
              in their hands as nurses were always on hand and checking on me.
            </p>
            <h4>KENDRIC MAINA</h4>
            <h5>PHOTOGRAPHER</h5>
          </div>
          <div className='home-testimonial-card'>
            <img src={testImg3} alt='Test' /><br />
            <p>
              Kind, friendly staff from the minute we walked in, felt very safe
              in their hands as nurses were always on hand and checking on me.
            </p>
            <h4>MARGARET WAKESHO</h4>
            <h5>GRAPHIC DESIGNER</h5>
          </div>
          <div className='home-testimonial-card'>
            <img src={testImg2} alt='Test' /><br />
            <p>
              Kind, friendly staff from the minute we walked in, felt very safe
              in their hands as nurses were always on hand and checking on me.
            </p>
            <h4>SHINSKI</h4>
            <h5>AI EXPERT</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
