import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({
  cart,
  setCart,
  cartCount,
  productQuantity,
  setCartCount,
  handleAddorRemoveQuantity,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  // Adds Prices to get Total price
  const handlePrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price * productQuantity;
    });
    setTotalPrice(total);
  };

  // Call the function on render
  useEffect(() => {
    handlePrice();
  });

  // Fiters out Products from Cart
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    setCartCount(arr.length);
  };

  return (
    <div className='cart-main-container'>
      <h1>Cart</h1>
      <br />
      <div className='cart-container'>
        <section className='cart-cards'>
          {/* --.map is not a function--
          --https://stackoverflow.com/a/70817122/20689462-- */}
          {Array.isArray(cart) ? (
            cart.map((product) => {
              return (
                <div className='cart-card' key={product.id}>
                  <img src={product.image} alt='Product' />
                  <section className='cart-card-detail-section'>
                    <p>{product.title}</p>
                    <br />
                    <div className='quantity-change-buttons'>
                      Quantity:{' '}
                      <button
                        onClick={() => handleAddorRemoveQuantity(product, -1)}
                      >
                        -
                      </button>
                      <input value={productQuantity} />
                      <button
                        onClick={() => handleAddorRemoveQuantity(product, +1)}
                      >
                        +
                      </button>{' '}
                      | Ksh. {product.price}
                    </div>

                    <p>Total: Ksh. {product.price * productQuantity}</p>
                  </section>
                  <i
                    class='fa-regular fa-circle-xmark'
                    onClick={() => handleRemove(product.id)}
                  ></i>
                </div>
              );
            })
          ) : (
            <h1>No Items in Cart</h1>
          )}
        </section>
        <section className='cart-calculation-section'>
          <h2>
            Total Price: <br />
            Ksh. {totalPrice}
          </h2>
          <br />
          <h2>Total Items: {cartCount}</h2>
          <br />
          <Link to='/checkout'>
            <button type='button' id='proceed-to-checkout'>
              Proceed to Checkout
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Cart;
