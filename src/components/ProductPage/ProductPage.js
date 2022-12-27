import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import loadingGif from "../../img/loading.gif"

function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setProductLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const results = await response.json();
      setProduct(results);
      setProductLoading(false);
    };
    fetchProduct();
  }, [productID]);

  if (productLoading) {
    return <img src={loadingGif} alt="Loading animation" className='loading-gif'/>
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
          <input type='number' id='product-quantity' defaultValue='1' />
          <br />
          <br />
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
