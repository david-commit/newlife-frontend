import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';

function Footer() {
  return (
    <footer>
      <div class='footercontainer'>
        <div class='footer1'>
          <div class='newslettertext'>
            <h2>Stay up to date</h2>
            <p>
              Subscribe to our newsletter to receive update and learn more about
              NewLife Hospital.
            </p>
          </div>
          <form class='newsletter'>
            <input
              id='news-email'
              placeholder='Enter your email address'
            ></input>
            <button type='submit' id='sub'>
              Subscribe
            </button>
          </form>
        </div>
        <div className='footer-2-container'>
          <div class='footer2'>
            <div id='section1'>
              <NavLink to='/'>
                <div className='logo-footer'>
                  <img src={logo} alt='Logo' />
                  <div className='logo-txt'>
                    <p id='logo-txt1-footer'>NewLife Hospital</p>
                    <p id='logo-txt2-footer'>Dedication beyond measure.</p>
                  </div>
                </div>
              </NavLink>
              <br />
              <p id='footer-about-paragraph'>
                A community in which all people achieve their full potential for
                health and well-being across the lifespan. We work to be trusted
                by patients, a valued partner in the community, and creators of
                positive change.
              </p>
              <br />
              <h3>© NewLife Hospital 2022</h3>
              <br />
              <br />
            </div>
            <div id='section2'>
              <h1>Our Location</h1>
              <p>
                3rd floor, Nextlane Plaza <br /> - Ngong Road Nairobi, <br />{' '}
                Kenya
              </p>
              <br />
              <p>
                Email: <br /> admin@newlife.org
              </p>
            </div>
            <div id='section2'>
              <h1>Working Time</h1>
              <p>Mon - Wed: 9:00 AM - 7:00 PM</p>
              <p>Thur: 9:00 AM - 6:30 PM</p>
              <p> Fri: 9:00 AM - 6:00 PM </p>
              <p>Sat - Sun: Closed</p>
            </div>
            <div id='section2'>
              <h1>Emergency Cases</h1>
              <p>Toll Free: 0812 345 678</p>
              <p>Saf: +254 712 345 678</p>
              <p>Air: +254 733 123 456</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
