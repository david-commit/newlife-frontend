import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

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
          <input type='number' id='product-quantity' defaultValue='1' />
          <br /><br />
          <h3>Desctiption</h3>
          <p>{product.description}</p>
          <br />
          <h3>Rating</h3>
          {/* <p>{product.rating}</p> */}
        </section>
      </div>
    </div>
  );
}

export default ProductPage;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack N
