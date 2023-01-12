import React from 'react'
import './PatientReviews.css'
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import ReactStars from 'react-stars';
import { useHistory } from 'react-router-dom';

function PatientReviews({loggedIn, userType}) {
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  } else {
    history.push('/login')
  }

  return (
    <div className='patient-reviews-main-container'>
      <PatientSidebar />
      <div className='patient-review-section'>
        
          <textarea >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            alias, voluptatum vero eaque veniam inventore nihil possimus
            repellendus nemo commodi cupiditate eum praesentium incidunt odit
            tenetur consequatur corporis cumque id?
          </textarea>

            <div >
            <button className='form-button' type='view'>View</button>
            </div>
            <h3>Rating</h3>
          {/* <p>{product.rating.rate}</p> */}
          {/* <p>{product.rating}</p> */}
          <section className='prevRating'>
            <p id='product-rating'>
              <strong>{4}{"/5"}</strong>
            </p>
            <div>
              <ReactStars
                count={5}
                value={4}
                size={24}
                color2={'#ffd700'}
                half={false}
                edit={false}
              />
           
            </div>
          </section>
            
        </div>
        </div>
        
  );
}

export default PatientReviews
