import React, { useEffect, useState } from 'react';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className='shop-main-container'>
      <h1>Shop</h1>
      <div className='shop-search-filter-container'>
        <input
          type='search'
          id='search-input'
          placeholder='Search'
          style={{
            fontSize: '16px',
            padding: '4px',
            borderRadius: '5px',
            border: '1px solid grey',
          }}
        />
        <select id='shop-filter'>
          <option hidden>Filter</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className='shop-cards'>
        {products.map((product) => {
          return <div className='shop-card'>
            <img src={product.image} alt="Product" />
          </div>;
        })}
      </div>
    </div>
  );
}

export default Shop;
