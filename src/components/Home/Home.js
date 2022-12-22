import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import welcomeImg from '../../img/dark-female-doctor.png';
import signature from '../../img/signature.png';

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
            positive change. <br /><br />
            Randon Wakesho, Head of Clinic
          </p><br />
          <img src={signature} alt="Signatory" />
        </div>
      </div>
    </div>
  );
}

export default Home;
