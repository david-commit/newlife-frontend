import React, { useEffect, useState } from 'react';
import './PatientReviews.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import ReactStars from 'react-stars';
import { useHistory } from 'react-router-dom';

function PatientReviews({ loggedIn, userType }) {
  const history = useHistory();
  const [userReviews, setUserReviews] = useState([
    {
      id: 1,
      rating: 2,
      description_header: 'Below Average',
      description_content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
      product: {
        id: 2,
        name: 'Lamotrigine',
        category: 'Bipolar Disorder',
        price_in_2dp: 124.19,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/muscle-core-100-whey-platinum-standard-10-lb-chocolate-flavor-247x247.jpg',
        dosage: null,
        stock: 60,
      },
    },
    {
      id: 2,
      rating: 2,
      description_header: 'Below Average',
      description_content:
        'Came Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at eligen',
      product: {
        id: 1,
        name: 'Lamictal',
        category: 'Bipolar Disorder',
        price_in_2dp: 186.86,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/garden-of-life-sport-certified-grass-fed-whey-protein-vanilla-247x247.jpg',
        dosage: null,
        stock: 98,
      },
    },
    {
      id: 3,
      rating: 3,
      description_header: 'Average',
      description_content:
        'I like Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque omnis',
      product: {
        id: 3,
        name: 'Latuda',
        category: 'Bipolar Disorder',
        price_in_2dp: 872.65,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/muscle-core-100-whey-platinum-standard-chocolate-2lb-247x247.jpg',
        dosage: null,
        stock: 31,
      },
    },
    {
      id: 4,
      rating: 5,
      description_header: 'Excellent',
      description_content:
        'Though Lorem ipsum dolor sit amet, consectetur adipisi',
      product: {
        id: 11,
        name: 'Doxorubicin',
        category: 'Cancer',
        price_in_2dp: 16.33,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/bio-nutrition-b-12-sublingual-6000-mcg-50-tablets-247x247.jpg',
        dosage: null,
        stock: 19,
      },
    },
    {
      id: 5,
      rating: 4,
      description_header: 'Good',
      description_content: 'Qwerty qwertyuio',
      product: {
        id: 17,
        name: 'Sertralie',
        category: 'Depression',
        price_in_2dp: 187.23,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/bio-nutrition-black-seed-oil-1000mg-90-capsules-247x247.jpg',
        dosage: null,
        stock: 3,
      },
    },
    {
      id: 6,
      rating: 3,
      description_header: 'Average',
      description_content: 'Qwerty qwertyuio lorema',
      product: {
        id: 12,
        name: 'Etoposide',
        category: 'Cancer',
        price_in_2dp: 43.62,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/bio-nutrition-bee-propolis-1000mg-60-capsules-247x247.jpg',
        dosage: null,
        stock: 33,
      },
    },
    {
      id: 7,
      rating: 5,
      description_header: 'Average',
      description_content:
        'Dolor minima doloribus ad facere doloremque libero in, reiciendis tenetur',
      product: {
        id: 15,
        name: 'Bupropion',
        category: 'Depression',
        price_in_2dp: 891.22,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/bio-nutrition-bio-n-saffron-extract-50-vegicaps-247x247.jpg',
        dosage: null,
        stock: 98,
      },
    },
    {
      id: 8,
      rating: 5,
      description_header: 'Excellent',
      description_content:
        'inventore quos reiciendis eius vero excepturi totam quia provident enim laboriosam. Vero pariatur velit numquam',
      product: {
        id: 8,
        name: 'Leukeran',
        category: 'Cancer',
        price_in_2dp: 198.75,
        description: null,
        image:
          'https://www.medicaltradehub.com/wp-content/uploads/2022/12/muscle-core-high-protein-wafer-bar-dark-chocolate-12x40g-247x247.jpg',
        dosage: null,
        stock: 9,
      },
    },
  ]);

  if (loggedIn) {
    if (userType == 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType == 'admin') {
      history.push('/admin/me');
    }
  } else {
    history.push('/login');
  }

  // Get user token
  const token = localStorage.getItem('token');

  // Fetch all reviews
  // useEffect(() => {
  //   fetch(`https://newlife-backend-production.up.railway.app/reviews`, {
  //     headers: { Authorization: token },
  //   })
  //     .then((r) => r.json())
  //     .then((d) => setUserReviews(d));
  // }, []);
  // console.log(userReviews);

  return (
    <div className='patient-reviews-main-container'>
      <PatientSidebar />
      <div className='patient-review-section'>
        <h1>Your Product Reviews</h1>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <th>SNo.</th>
              <th>Product Name</th>
              <th>Header</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Del</th>
            </tr>

            {Array.isArray(userReviews) ? (
              userReviews?.map((review, index) => {
                return (
                  <tr key={review.id}>
                    <td>{index + 1}</td>
                    <td>{review.product.name}</td>
                    <td>{review.description_header}</td>
                    <td id='star-cell'>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={24}
                        color2={'#ffd700'}
                        half={true}
                        edit={false}
                      />
                    </td>
                    <td id='review-desc'>{review.description_content}</td>
                    <td>
                      <i
                        class='fa-solid fa-trash'
                        onClick={(e) => {
                          fetch(`/reviews/${review.id}`, {
                            method: 'DELETE',
                          });
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td style={{ padding: '10px 0' }} colSpan={6}>
                  You dont have any product revires
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientReviews;
