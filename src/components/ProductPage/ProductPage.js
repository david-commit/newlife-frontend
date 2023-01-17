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
  let [effect, setEffect] = useState([]);

  console.log("products", product);
  console.log("reviews", reviews);
  console.log("dosage", dosage);

  // Setting new product rating from user
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
    console.log(newRating);
  };

  // Fetches a single product
  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      const response = await fetch(
        `http://localhost:3000/products/${productID}`
      );
      const results = await response.json();
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

  // Find product average rating
  const getAverageRating = () => {
    const allRatings = [];
    reviews?.map((review) => {
      allRatings.push(review.rating);
    });
    const sumOfConsecutives = (value1, value2) => value1 + value2;
    const sumOfNums = allRatings.reduce(sumOfConsecutives);
    console.log(sumOfNums);
  };

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
            <strong>{prevRating}</strong>/5
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
            {/* <p>200 verified ratings</p> */}
          </div>
        </section>

        <div id="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

        <div id="product-page-info">
          <span className="product-price">
            Ksh &nbsp;{" "}
            <span>{parseFloat(product.price_in_2dp).toFixed(2)}</span>
          </span>

          <span className="product-quantity">
            <button onClick={() => handleAddorRemoveQuantity(product, -1)}>
              -
            </button>

            <input
              type="number"
              min="1"
              value={product.quantity}
              // value={productQuantity}
              onChange={(e) => setProductQuantity(parseInt(e.target.value))}
            />

            <button onClick={() => handleAddorRemoveQuantity(product, +1)}>
              +
            </button>
          </span>
        </div>

        {/* <section className="product-details-section"> */}
        {/* <Link path to='/cart'> */}

        <button
          id="product-page-cart-button"
          onClick={() => handleAddToCart(product)}
        >
          <i class="fa-solid fa-cart-plus"></i> &nbsp; Add to Cart
        </button>
        {/* </Link> */}

        {/* <p>{product.rating.rate}</p> */}
        {/* <p>{product.rating}</p> */}
        {/* </section> */}
      </div>

      <section className="product-details-bottom-section">
        <span className="word-container">
          <h3>Dosage considerations</h3>
          <ul>
            {dosage.map((e) => {
              return <li key={e.id}>{e.consideration}</li>;
            })}
          </ul>
        </span>

        <span className="word-container">
          <h3>Side Effects</h3>
          <ul>
            {effect.map((e) => {
              return <li>{e.side_effect}</li>;
            })}
          </ul>
        </span>

        <span className="word-container">
          <h3>Reviews</h3>
          <ul>
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
            size={30}
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
