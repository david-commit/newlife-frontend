import React from 'react';
import './Testimonials.css';
import testImg1 from '../../img/rev-img-1.jpg';
import testImg2 from '../../img/rev-img-2.jpg';
import testImg3 from '../../img/rev-img-3.jpg';

const Testimonials = () => {
  
  return (
    <div class='testimonials-main-container'>
      <div class='testimonials-container'>
        <h1>What Our Patients Say...</h1>
        <p class='explanation'>
          Every month, NewLife Hospital receives masses of kind comments,
          letters and e-mails from patients about the positive experience they
          have: Below is a selection of these comments:
        </p>
        <div class='testimonial-slider'>
          <ul class='slider'>
            <li>
              <div class='testimonial-slider-content'>
                <q>
                  {' '}
                  Kind, friendly staff from the minute we walked in, felt very
                  safe in their hands as nurses were always on hand and checking
                  on me.
                </q>
                <section>
                  <img src={testImg1} alt='Test' />
                  <p class='source'>- KENDRIC MAINA, Photographer</p>
                </section>
              </div>
            </li>
            <li>
              <div class='testimonial-slider-content'>
                <q>
                  {' '}
                  Kind, friendly staff from the minute we walked in, felt very
                  safe in their hands as nurses were always on hand and checking
                  on me!
                </q>
                <section>
                  <img src={testImg2} alt='Test' />
                  <p class='source'>- MARGARET WAKESHO, Graphic Designer</p>
                </section>
              </div>
            </li>
            <li>
              <div class='testimonial-slider-content'>
                <q>
                  Kind, friendly staff from the minute we walked in, felt very
                  safe in their hands as nurses were always on hand and checking
                  on me!
                </q>
                <section>
                  <img src={testImg3} alt='Test' />
                  <p class='source'>- SHINSKI, AI Expert</p>
                </section>
              </div>
            </li>
            <li>
              <div class='testimonial-slider-content'>
                <q>
                  Kind, friendly staff from the minute we walked in, felt very
                  safe in their hands as nurses were always on hand and checking
                  on me!
                </q>
                <section>
                  <img src={testImg3} alt='Test' />
                  <p class='source'>- SHINSKI, AI Expert</p>
                </section>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
