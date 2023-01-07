import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, cartCount }) {
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className='cart-main-container'>
      <h1>Cart</h1>
      <br />
      <div className='cart-container'>
        <section className='cart-cards'>
          {cart ? (
            cart.map((product) => {
              return (
                <div className='cart-card' key={product.id}>
                  <img src={product.image} alt='Product' />
                  <section className='cart-card-detail-section'>
                    <p>{product.title}</p>
                    <p>Quantity: </p>
                    <p>Ksh. {product.price}</p>
                  </section>
                  <i class='fa-regular fa-circle-xmark'></i>
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
