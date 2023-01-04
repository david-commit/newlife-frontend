import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import loadingGif from '../../img/loading.gif';

function ProductPage({ handleAddToCart }) {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  let [productQuantity, setProductQuantity] = useState(1);

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
          <p id='product-rating'>4/5</p>
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
    </div>
  );
}

export default ProductPage;
