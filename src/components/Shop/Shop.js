import React, { useEffect, useState } from 'react';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortProducts, setSortProducts] = useState('');
  console.log(sortProducts);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSearchQuery(data);
      });
  }, []);

  const handleSearch = (e) => {
    setProducts(
      searchQuery.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
    return products;
  };

  const renderedProducts =
    // if (sortProducts === "price-asc"){
    //   products && products.sort((a, b) => a.price > b.price ? 1 : -1)
    // }

    products &&
    products.map((product) => {
      return (
        <div className='shop-card' key={product.id}>
          <img src={product.image} alt='Product' />
          <div className='shop-card-text'>
            <p>{product.category}</p>
            <div className='product-title'>
              <h3>{product.title}</h3>
            </div>
            <h4>Ksh {product.price}</h4>
          </div>
        </div>
      );
    });

  return (
    <div className='shop-main-container'>
      <h1>Shop</h1>
      <div className='shop-search-filter-container'>
        <input
          onChange={handleSearch}
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
        <select
          id='shop-sort'
          onChange={(e) => setSortProducts(e.target.value)}
        >
          <option hidden>Sort</option>
          <option value='price-asc'>Price: Low to High</option>
          <option value='price-desc'>Price: High to Low</option>
        </select>
      </div>
      <div className='shop-cards'>{renderedProducts}</div>
    </div>
  );
}

export default Shop;
