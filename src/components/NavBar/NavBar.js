import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'; //https://stackoverflow.com/questions/51108438/reactjs-import-3-levels-deep-react

function NavBar({loggedIn, setLoggedIn, userType, setUserType, cartCount}) {
  function handleLogoutClick() {
    setLoggedIn(false)
    const token = localStorage.getItem("token")
    const intervalId = JSON.parse(localStorage.getItem("intervalId"))
    localStorage.clear()
    setUserType("")

    const logoutEndpoint = userType == "patient"?
      "http://127.0.0.1:3000/logout" :
      userType == "practitioner" ? "http://127.0.0.1:3000/practitioner/logout" :
      "http://127.0.0.1:3000/admin/logout"

    fetch(logoutEndpoint, {
      method: 'DELETE',
      headers: {"Accept": "application/json", "Authorization": token}
     })

    return clearInterval(intervalId)
  }
// console.log(cartCount)
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
            {/* == Displays User Role is logged in currently */}
            {loggedIn && (userType == "patient" )
              ? 'Logged as Patient!'
              : loggedIn && (userType == "practitioner")
              ? 'Logged as Practitioner!'
              : 'Not logged In!'}
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink exact to='/about'>
              About Us
            </NavLink>
            {loggedIn && (userType == "patient") ? (
              <>
                <NavLink exact to='/patients/me'>
                  Dashboard
                </NavLink>
                <NavLink exact to='/products'>
                  Shop
                </NavLink>
                <NavLink exact to='/cart'>
                  <div className='cart-icon'>
                    <i class='fa-solid fa-cart-plus'></i>
                    <span id='cart-length'>{cartCount}</span>
                  </div>
                </NavLink>
                <NavLink exact to='/'>
                  <button onClick={handleLogoutClick}>Logout</button>
                </NavLink>
              </>
            ) : loggedIn && (userType == "practitioner") ? (
              <>
                <NavLink exact to='/practitioners/me'>
                  Dashboard
                </NavLink>
                {/* <NavLink exact to='/products'>
                  Shop
                </NavLink> */}
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
