import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import ShopPagination from "../ShopPagination/ShopPagination";
import loadingGif from "../../img/loading.gif";

function Shop({
  products,
  cartItems,
  setCartItems,
  setCartSuccess,
  handleSearch,
  loading,
  cartWarning,
  cartAddSuccess,
  sortProducts,
  setSortedProducts,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  let [query, setQuery] = useState("");

  let [result, setResult] = useState("");

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function searchHandle(e) {
    e.preventDefault();
    console.log(query);
  }

  function searchResult(e) {
    e.preventDefault();
    console.log(query);
    fetch("http://localhost:3000/productSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error(error));
  }

  function handleAddToCart(product){
    const productId = product.id
    const orderId = cartItems[0].order_id

    fetch('http://localhost:3000/shopping_carts', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({product_id: productId, order_id: orderId, quantity: 1})
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          const newCartItems = [...cartItems, data]
          localStorage.setItem('cartItems', JSON.stringify(newCartItems))
          setCartItems(newCartItems)
          setCartSuccess(true)
        })
      }else{
        res.json().then(errors => {
          setCartSuccess(false)
          console.warn(errors)
        })
      }
    })
  }

  console.log(result);

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
              <section className="shop-card-section1">
                <p>{product.category}</p>

                {parseFloat(product.price_in_2dp) < 1 ? (
                  <button id="free-button">Free</button>
                ) : (
                  ""
                )}
              </section>

              <div className="product-title">
                <p>{product.name}</p>
              </div>

              <section className="card-price-button">
                <p>Ksh {parseFloat(product.price_in_2dp).toFixed(2)}</p>
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
        <form id="search-products-form" onSubmit={searchResult}>
          <input
            // onChange={handleSearch}
            type="search"
            id="search-input"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

      <div className="shop-cards">
        {" "}
        {result
          ? result &&
            result.map((product) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  className="shop-card-nav"
                  key={product.id}
                >
                  <div className="shop-card">
                    <img src={product.image} alt="Product" />

                    <div className="shop-card-text">
                      <section className="shop-card-section1">
                        <p>{product.category}</p>

                        {parseFloat(product.price_in_2dp) < 1 ? (
                          <button id="free-button">Free</button>
                        ) : (
                          ""
                        )}
                      </section>

                      <div className="product-title">
                        <p>{product.name}</p>
                      </div>

                      <section className="card-price-button">
                        <p>Ksh {parseFloat(product.price_in_2dp).toFixed(2)}</p>
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
            })
          : renderedProducts}
      </div>

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
