import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import loadingGif from '../../img/loading.gif';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

function ProductPage({ handleAddToCart }) {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  let [productQuantity, setProductQuantity] = useState(1);
  const [newRating, setNewRating] = useState(0);
  const [prevRating] = useState(4.5);

  // Setting new product rating from user
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
    console.log(newRating);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      const results = await response.json();
      setProduct(results);
      setProductLoading(false);
    };
    fetchProduct();
  }, [productID]);

  if (productLoading) {
    return (
      <img src={loadingGif} alt='Loading animation' className='loading-gif' />
    );
  }

  function handleAddQty() {
    setProductQuantity((productQuantity) => productQuantity + 1);
  }

  function handleReduceQty() {
    {
      productQuantity < 2
        ? alert('Quantity cannot be less than 1')
        : setProductQuantity((productQuantity) => productQuantity - 1);
    }
  }
  console.log(productQuantity);

  return (
    <div className='product-page-main-container'>
      <div className='product-details-container'>
        <img src={product.image} alt='Product appearance' />
        <section className='product-details-section'>
          <span>
            Product ID: {product.id} | Category: {product.category}
          </span>
          <h1>{product.title}</h1>
          <h3 className='product-price'>
            Ksh <span>{product.price}</span>
          </h3>
          <span className='product-quantity'>
            <button onClick={() => handleReduceQty()}>-</button>
            <input
              type='number'
              value={productQuantity}
              onChange={(e) => setProductQuantity(parseInt(e.target.value))}
            />
            <button onClick={() => handleAddQty()}>+</button>
          </span>
          <br />
          <br />
          {/* <Link path to='/cart'> */}
          <button
            id='product-page-cart-button'
            onClick={() => handleAddToCart(product)}
          >
            <i class='fa-solid fa-cart-plus'></i> &nbsp; Add to Cart
          </button>
          {/* </Link> */}
          <br />
          <br />
          <h3>Desctiption</h3>
          <p id='product-description'>{product.description}</p>
          <br />
          <h3>Rating</h3>
          {/* <p>{product.rating.rate}</p> */}
          {/* <p>{product.rating}</p> */}
          <section className='prevRating'>
            <p id='product-rating'>
              <strong>{prevRating}</strong>/5
            </p>
            <div>
              <ReactStars
                count={5}
                value={prevRating}
                size={24}
                color2={'#ffd700'}
                half={false}
                edit={false}
              />
              <p>200 verified ratings</p>
            </div>
          </section>
        </section>
      </div>
      <section className='product-details-bottom-section'>
        <h3>Dosage considerations</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            blanditiis ea enim ad exercitationem, velit similique quisquam
            cupiditate dolor! Error cupiditate consectetur nobis temporibus
            deleniti perferendis ratione! Facilis, ipsa rem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            laudantium voluptatum a quis ipsa magnam, recusandae natus itaque
            sunt ut labore sit deleniti quisquam laboriosam repudiandae tempore,
            atque eos voluptatibus.
          </li>
        </ul>
        <h3>Side Effects</h3>
        <ul>
          <li>Constipation</li>
          <li>Skin rash or dermatisis</li>
          <li>Diziness</li>
          <li>Drowsiness</li>
          <li>Dry mouth</li>
        </ul>
      </section>
      <form id='review-form'>
        <h2>Add Review</h2>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          color2={'#ffd700'}
          half={true}
        />
        {newRating < 2
          ? 'Poor'
          : newRating < 3
          ? 'Below Average'
          : newRating < 4
          ? 'Average'
          : newRating < 5
          ? 'Above Average'
          : newRating < 6
          ? 'Excellent'
          : 'Select Rate'}
        <br />
        <br />
        <textarea id='review-textarea' placeholder='Type review..'></textarea>
        <br />
        <br />
        <button type='submit'>Submit Review</button>{' '}
        <button
          type='reset'
          style={{ width: 'fit-content' }}
          onClick={() => setNewRating(0)}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default ProductPage;
