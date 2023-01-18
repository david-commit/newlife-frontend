import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import loadingGif from "../../img/loading.gif";
import ReactStars from "react-stars";

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
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  let [rate, setRate] = useState("");
  let [effect, setEffect] = useState([]);

  // Setting new product rating from user
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
    console.log(newRating);
  };

  // function handleQuantity(e) {
  //   e.preventDefault();
  //   console.log(quantity);
  // }

  //post product review
  function submitReview(e) {
    e.preventdefault();
    console.log();
  }

  // Fetches a single product
  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      const response = await fetch(
        `http://localhost:3000/products/${productID}`
      );
      const res = await fetch(
        `http://localhost:3000/products/${productID}/average_rating`
      );
      let res1 = await res.json();
      const results = await response.json();
      setRate(res1);
      setProduct(results);
      setPrevRating(results.rating);
      setDosage(results.dosage_considerations);
      setReviews(results.reviews);
      setProductLoading(false);
      setEffect(results.side_effects);
    };
    fetchProduct();
  }, [productID, setDosage]);

  // Loading Animationmethod_name
  if (productLoading) {
    return (
      <img src={loadingGif} alt="Loading animation" className="loading-gif" />
    );
  }

  return (
    <div className="product-page-main-container">
      <div className="product-details-container">
        <span id="product-page-details">
          Product ID: {product.id} | Category: {product.category}
        </span>
        <h1 id="product-page-title">{product.name}</h1>

        <span id="product-page-image">
          <img src={product.image} alt="Product appearance" />
        </span>

        <section className="prevRating">
          <p id="product-rating">
            <strong>Rating: </strong> &nbsp;
            {parseFloat(rate.average_rating).toFixed(2)}
          </p>

          <div id="rating-stars">
            <ReactStars
              count={5}
              value={prevRating}
              size={40}
              color2={"#ffd700"}
              half={false}
              edit={false}
            />
          </div>
        </section>

        <div id="product-description">
          <h3>Description</h3>
          <p>No description is available for this product at this time.</p>
        </div>

        <div id="product-page-info">
          <span className="product-price">
            Ksh &nbsp;
            <span>{product.price_in_2dp}</span>
          </span>

          <button
            id="product-page-cart-button"
            onClick={() => handleAddToCart(product)}
          >
            <i class="fa-solid fa-cart-plus"></i> &nbsp; Add to Cart
          </button>
        </div>
      </div>

      <section className="product-details-bottom-section">
        <span className="word-container">
          <h3>Dosage considerations</h3>
          <ul>
            {dosage.map((e) => {
              return (
                <li key={e.id} className="word-item">
                  {e.consideration}
                </li>
              );
            })}
          </ul>
        </span>

        <span className="word-container">
          <h3>Side Effects</h3>
          <ul>
            {effect.map((e) => {
              return (
                <li className="word-item" key={e.id}>
                  {e.side_effect}
                </li>
              );
            })}
          </ul>
        </span>

        <span className="word-container">
          <h3>Reviews</h3>
          <ul id="review-container">
            {reviews.map((e) => {
              return <li className="review-item">{e.description_content}</li>;
            })}
          </ul>
        </span>

        <form id="review-form">
          <h3>Add Review</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            color2={"#ffd700"}
            half={true}
          />
          {newRating < 2
            ? "Poor"
            : newRating < 3
            ? "Below Average"
            : newRating < 4
            ? "Average"
            : newRating < 5
            ? "Above Average"
            : newRating < 6
            ? "Excellent"
            : "Select Rate"}
          <textarea id="review-textarea" placeholder="Type review.."></textarea>
          <span id="review-buttons">
            <button type="reset" id="reset" onClick={() => setNewRating(0)}>
              Clear
            </button>
            <button type="submit" id="submit">
              Submit
            </button>
          </span>
        </form>
      </section>
      {cartWarning ? <p id="cart-warning">Item is already in cart</p> : ""}
    </div>
  );
}

export default ProductPage;
