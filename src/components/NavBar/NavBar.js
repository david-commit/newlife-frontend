import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='top-bar-container'>
      <div className='topbar'>
        <div className='topbar1'>
          <i class='fa-solid fa-location-dot'></i> Nextlane Plaza, Nairobi,
          Kenya <i class='fa-solid fa-phone' style={{paddingLeft: "10px"}}></i> +254712 345 678
        </div>
        <div className='topbar2'>
          <a target="_blank" rel="noreferrer" href='https://www.facebook.com'>
            <i class='fa-brands fa-facebook'></i>
          </a>
          <a target="_blank" rel="noreferrer" href='https://www.twitter.com'>
            <i class='fa-brands fa-twitter'></i>
          </a>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com'>
            <i class='fa-brands fa-linkedin'></i>
          </a>
          <a target="_blank" rel="noreferrer" href='https://www.tumblr.com'>
            <i class='fa-brands fa-tumblr'></i>
          </a>
          <a target="_blank" rel="noreferrer" href='https://www.youtube.com'>
            <i class='fa-brands fa-youtube'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
