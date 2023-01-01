import React from 'react';
import './Cart.css';

function Cart({ cart }) {
  return (
    <div className='cart-main-container'>
      <h1>Cart</h1>
      <section className='cart-cards'>
       {cart.map((card) => {
        <div className='cart-card'>
         {card.title}lkjmn
        </div>

       })}
      </section>
    </div>
  );
}

export default Cart;
