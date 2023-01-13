import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Cart.css';
// https://react-responsive-modal.leopradel.com/
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import mpesaImg from '../../img/Lipanampesa.png';

function Cart({
  cart,
  setCart,
  cartCount,
  productQuantity,
  setCartCount,
  // handleAddorRemoveQuantity,
  handleReduceQty,
  handleAddQty,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState('');

  // Modal Popup Component
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  // Adds Prices to get Total price
  const handlePrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price_in_2dp * productQuantity;
      console.log(item);
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
      <h1 style={{ color: '#1d3e68' }}>Cart</h1>
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
                    <h2>{product.name}</h2>
                    <br />
                    <div className='quantity-change-buttons'>
                      Quantity:{' '}
                      <button
                        // onClick={() => handleAddorRemoveQuantity(product, -1)}
                        onClick={() => handleReduceQty(product)}
                      >
                        -
                      </button>
                      <input value={productQuantity[product.id]} />
                      <button
                        // onClick={() => handleAddorRemoveQuantity(product, +1)}
                        onClick={() => handleAddQty(product)}
                      >
                        +
                      </button>{' '}
                      | Ksh. {parseFloat(product.price_in_2dp).toFixed(2)}
                    </div>
                    <p>
                      Total: Ksh.{' '}
                      {parseFloat(
                        product.price_in_2dp * productQuantity[product.id]
                      ).toFixed(2)}
                    </p>
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
            Ksh. {parseFloat(totalPrice).toFixed(2)}
          </h2>
          <br />
          <h2>Total Items: {cartCount}</h2>
          <br />
          <button onClick={() => setOpenFirst(true)} id='pay-button-checkout'>
            Pay
          </button>
        </section>
      </div>
      <Modal
        id='checkout-modal'
        open={openFirst}
        onClose={() => setOpenFirst(false)}
        center
      >
        {cartCount > 0 ? (
          <>
            <img src={mpesaImg} alt='Mpesa' style={{ width: '100%' }} />
            <div className='checkout-popup-container'>
              <h1>Checkout</h1>
              <br />
              <h2>Your order</h2>
              {cart?.map((item) => {
                return <p>{item.name} x 1</p>;
              })}
              <br />
              <br />
              <h1>Payment (Secure)</h1>
              <br />
              <form className='checkout-form'>
                <label>
                  Mpesa number
                  <br />
                  <input
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Amount (Ksh)
                  <br />
                  <input
                    readOnly
                    value={parseFloat(totalPrice).toFixed(0)}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <br />

                <button type='submit' onClick={() => alert('Hello World')}>
                  Send Prompt
                </button>
                <br />
                <p
                  id='checkout-need-help'
                  className='button'
                  onClick={() => setOpenSecond(true)}
                >
                  Need Help?
                </p>
              </form>
            </div>
          </>
        ) : (
          <div className='checkout-empty-cart'>
            <br />
            <h1>No items in Cart</h1>
          </div>
        )}
      </Modal>
      <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
        <br /><br />
        <h1>qwertyuiop</h1>
      </Modal>
    </div>
  );
}

export default Cart;
