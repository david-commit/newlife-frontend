import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import ShopPagination from "../ShopPagination/ShopPagination";
import loadingGif from "../../img/loading.gif";

function Shop({
  products,
  handleSearch,
  loading,
  handleAddToCart,
  cartWarning,
  cartAddSuccess,
  sortProducts,
  setSortedProducts,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sort Products Logic
  // const [sortProducts, setSortProducts] = useState('');
  // if (sortProducts === "price-asc") {
  //   products && products.sort((a, b) => a.price > b.price ? 1 : -1)
  // }
  // if (sortProducts === "price-desc") {
  //   products && products.sort((a, b) => a.price < b.price ? 1 : -1)
  // }

  const renderedProducts =
    currentProducts &&
    currentProducts.map((product) => {
      return (
        <Link
          to={`/products/${product.id}`}
          className="shop-card-nav"
          key={product.id}
        >
          <div className="shop-card">
            <img src={product.image} alt="Product" />
            <div className="shop-card-text">
              <section>
                <p>{product.category}</p>
                {parseFloat(product.price_in_2dp) < 1 ? (
                  <button id="free-button">Free</button>
                ) : (
                  ""
                )}
              </section>
              <div className="product-title">
                <h3>{product.name}</h3>
              </div>
              <section className="card-price-button">
                <h4>Ksh {parseFloat(product.price_in_2dp).toFixed(2)}</h4>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                >
                  + Add to Cart
                </button>
              </section>
            </div>
          </div>
        </Link>
      );
    });

  if (loading) {
    return (
      <img src={loadingGif} alt="Loading animation" className="loading-gif" />
    );
  }

  return (
    <div className="shop-main-container">
      <h1>Shop</h1>
      <div className="shop-search-filter-container">
        <form id="search-products-form">
          <input
            onChange={handleSearch}
            type="search"
            id="search-input"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>

        {cartWarning ? <p id="cart-warning">Item is already in cart</p> : ""}
        {cartAddSuccess ? <p id="cart-success">Item added succesfully</p> : ""}
        <select
          id="shop-sort"
          onChange={(e) => setSortedProducts(e.target.value)}
        >
          <option hidden>
            {sortProducts === "price-asc"
              ? "Price: Low to High"
              : sortProducts === "price-desc"
              ? "Price: High to Low"
              : "Sort Products"}
          </option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="shop-cards">{renderedProducts}</div>
      <ShopPagination
        productsPerPage={productsPerPage}
        products={products}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Shop;
