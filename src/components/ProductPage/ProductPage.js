import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import loadingGif from "../../img/loading.gif";
import ReactStars from "react-stars";
import Stars from "react-stars";

function ProductPage({
  handleAddToCart,
  productQuantity,
  dosage,
  setDosage,
  setProductQuantity,
  cartWarning,
  handleAddorRemoveQuantity,
}) {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [newRating, setNewRating] = useState(0);
  const [prevRating, setPrevRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  let [rate, setRate] = useState("");
  let [effect, setEffect] = useState([]);
  let [userId, setUserId] = useState("");
  let [rating, setRating] = useState("");
  let [header, setHeader] = useState("");
  let [content, setContent] = useState("");

  //post product review
  function submitReview(e) {
    e.preventDefault();
    console.log(rating, header, content, productID, userId);

    fetch("https://newlife-backend-production.up.railway.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: 4,
        description_header: header,
        description_content: content,
        product_id: productID,
        user_id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  // Fetches a single product
  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      const response = await fetch(
        `https://newlife-backend-production.up.railway.app/products/${productID}`
      );
      const res = await fetch(
        `https://newlife-backend-production.up.railway.app/products/${productID}/average_rating`
      );
      let res1 = await res.json();
      const results = await response.json();
      setUserId(JSON.parse(localStorage.person).id);
      setRate(res1);
      setProduct(results);
      setPrevRating(results.rating);
      setDosage(results.dosage_considerations);
      setReviews(results.reviews);
      setProductLoading(false);
      setEffect(results.side_effects);
    };
    fetchProduct();
    setHeader(
      rating < 2
        ? "Poor"
        : newRating < 3
        ? "Below Average"
        : newRating < 4
        ? "Average"
        : newRating < 5
        ? "Above Average"
        : newRating < 6
        ? "Excellent"
        : "Select Rate"
    );
  }, [productID, setDosage, rating, setHeader, header, newRating]);

  // Loading Animationmethod_name
  if (productLoading) {
    return (
      <img src={loadingGif} alt="Loading animation" className="loading-gif" />
    );
  }

  function handleChange(value) {
    setRating(value);
  }
  console.log(rating, header);
  return (
    <div className='product-page-main-container'>
      <div className='product-details-container'>
        <span id='product-page-details'>
          Product ID: {product.id} | Category: {product.category}
        </span>
        <h1 id='product-page-title'>{product.name}</h1>

        <span id='product-page-image'>
          <img src={product.image} alt='Product appearance' />
        </span>

        <section className='prevRating'>
          <p id='product-rating'>
            <strong>Rating: </strong> &nbsp;
            {parseFloat(rate.average_rating).toFixed(2)}
          </p>

          <div id='rating-stars'>
            <ReactStars
              count={5}
              value={parseFloat(rate.average_rating).toFixed(2)}
              size={40}
              color2={'#ffd700'}
              half={true}
              edit={false}
            />
          </div>
        </section>

        <div id='product-description'>
          <h3>Description</h3>
          <p>No description is available for this product at this time.</p>
        </div>

        <div id='product-page-info'>
          <span className='product-price'>
            Ksh &nbsp;
            <span>{product.price_in_2dp}</span>
          </span>

          <button
            id='product-page-cart-button'
            onClick={() => handleAddToCart(product)}
          >
            <i class='fa-solid fa-cart-plus'></i> &nbsp; Add to Cart
          </button>
        </div>
      </div>

      <section className='product-details-bottom-section'>
        <span className='word-container'>
          <h3>Dosage considerations</h3>
          <ul>
            {dosage.map((e) => {
              return (
                <li key={e.id} className='word-item'>
                  {e.consideration}
                </li>
              );
            })}
          </ul>
        </span>

        <span className='word-container'>
          <h3>Side Effects</h3>
          <ul>
            {effect.map((e) => {
              return (
                <li className='word-item' key={e.id}>
                  {e.side_effect}
                </li>
              );
            })}
          </ul>
        </span>

        <span className='word-container'>
          <h3>Reviews</h3>
          <ul id='review-container'>
            {reviews.map((e) => {
              return <li className='review-item'>{e.description_content}</li>;
            })}
          </ul>
        </span>

        <form id='review-form' onSubmit={submitReview}>
          <h3>Add Review</h3>
          <Stars
            count={5}
            value={rating}
            onChange={handleChange}
            size={24}
            color2={'#ffd700'}
          />
          {header}
          <textarea
            id='review-textarea'
            placeholder='Type review..'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <span id='review-buttons'>
            <button type='reset' id='reset' onClick={() => setNewRating(0)}>
              Clear
            </button>
            <button type='submit' id='submit'>
              Submit
            </button>
          </span>
        </form>
      </section>
      {cartWarning ? <p id='cart-warning'>Item is already in cart</p> : ''}
    </div>
  );
}

export default ProductPage;
