import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'; //https://stackoverflow.com/questions/51108438/reactjs-import-3-levels-deep-react

function NavBar({
  userPatient,
  userPractitioner,
  setUserPatient,
  setUserPractitioner,
  cart
}) {
  function handleLogoutClick() {
    fetch(`/logout`, { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUserPatient(null);
        setUserPractitioner(null);
        alert('Logged out!');
      }
    });
  }

  return (
    <>
      <div className='top-bar-container'>
        <div className='topbar'>
          <div className='topbar1'>
            <i class='fa-solid fa-location-dot'></i> Nextlane Plaza, Nairobi,
            Kenya{' '}
            <i class='fa-solid fa-phone' style={{ paddingLeft: '10px' }}></i>{' '}
            +254712 345 678
          </div>
          <div className='topbar2'>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com'>
              <i class='fa-brands fa-facebook'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.twitter.com'>
              <i class='fa-brands fa-twitter'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
              <i class='fa-brands fa-linkedin'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.tumblr.com'>
              <i class='fa-brands fa-tumblr'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com'>
              <i class='fa-brands fa-youtube'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='menubar-main-container'>
        <div className='menubar-container'>
          <NavLink exact to='/'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
              <div className='logo-txt'>
                <p id='logo-txt1'>NewLife Hospital</p>
                <p id='logo-txt2'>Dedication beyond measure.</p>
              </div>
            </div>
          </NavLink>
          <nav className='menubar-nav'>
            {userPatient
              ? 'Logged as Patient!'
              : userPractitioner
              ? 'Logged as Practitioner!'
              : 'Not logged In!'}
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink exact to='/about'>
              About Us
            </NavLink>
            {userPatient ? (
              <>
                <NavLink exact to='/patients/me'>
                  Appointments
                </NavLink>
                <NavLink exact to='/products'>
                  Shop
                </NavLink>
                <NavLink exact to='/'>
                  <button>Logout</button>
                </NavLink>
              </>
            ) : userPractitioner ? (
              <>
                <NavLink exact to='/practitioners/me'>
                  Appointments
                </NavLink>
                <NavLink exact to='/products'>
                  Shop
                </NavLink>
                <NavLink exact to='/cart'>
                    <i class='fa-solid fa-cart-plus'></i>
                  <span id='cart-length'>
                    {cart.length}
                  </span>
                </NavLink>
                <NavLink exact to='/'>
                  <button onClick={handleLogoutClick}>Logout</button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink exact to='/login'>
                  <button>Login</button>
                </NavLink>
                <NavLink exact to='/signup'>
                  <button>Sign Up</button>
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
