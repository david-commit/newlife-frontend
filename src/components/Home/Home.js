import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-banner-container-text'>
          <h3>WELCOME TO OUR HOSPITAL</h3><br />
          <h1>TAKE CARE OF YOUR HEALTH</h1><br />
          <p>
            A community in which all people achieve their full potential for
            health and well-being across the lifespan. We work to be trusted by
            patients, a valued partner in the community, and creators of
            positive change.
          </p><br />
          <Link to='/aboutus'>
          <button type='button'>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
