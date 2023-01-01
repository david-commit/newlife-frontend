import React from 'react';
import './Cart.css';

function Cart({ cart }) {
  return (
    <div className='cart-main-container'>
      <h1>Cart</h1>
      <section className='cart-cards'>
        ;l,
        {cart
          ? cart.map((product) => {
              <div className='cart-card'>{product.title}</div>;
            })
          : 'No Items in Cart'}
      </section>
      ;lkml'lk
    </div>
  );
}

export default Cart;
