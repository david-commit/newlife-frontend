import React from 'react'
import "./Footer.css"

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
          <div class='newsletter'>
            <input id='email' placeholder='Enter your email address'></input>
            <button id='sub'>Subscribe</button>
          </div>
        </div>

        <div class='footer2'>
          <div id='section1'>
            <h1>PataBoda</h1>
            <p>
              PataBoda is one of the leading asset financing <br /> companies in
              Kenya, providing boda boda <br />
              loans to thousands of aspiring business <br /> owners every day!
            </p>
            <h3>© PataBoda 2022</h3>
          </div>
          <div id='section2'>
            <h2>Counties</h2>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Nairobi</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Mombasa</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Kisumu</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Kiambu</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Taita Taveta</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Kajiado</a>
            </p>
          </div>
          <div id='section2'>
            <h2>Company</h2>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Home</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Products</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Contact Us</a>
            </p>
          </div>
          <div id='section2'>
            <h2>Others</h2>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>FAQs</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Terms of Service</a>
            </p>
            <p>
              <a href='https://newlife-frontend.vercel.app/'>Privacy and Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer