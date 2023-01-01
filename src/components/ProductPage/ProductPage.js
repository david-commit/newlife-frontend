import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import loadingGif from '../../img/loading.gif';

function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState('');

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

  return (
    <div className='product-page-main-container'>
      <div className='product-details-container'>
        <img src={product.image} alt='Product appearance' />
        <section className='product-details-section'>
          <p>{product.category}</p>
          <h1>{product.title}</h1>
          <h3 className='product-price'>
            Ksh <span>{product.price}</span>
          </h3>
          <input
            type='number'
            id='product-quantity'
            defaultValue='1'
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.type)}
          />
          <br />
          <br />
          <Link path to="/cart">
            <button
              id='product-page-cart-button'
              onClick={() => alert('Add to Cart Logic!')}
            >
              <i class='fa-solid fa-cart-plus'></i> &nbsp; Add to Cart
            </button>
          </Link>
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
