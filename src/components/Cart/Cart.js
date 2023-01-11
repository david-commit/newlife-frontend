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
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
                        onClick={() => handleReduceQty()}
                      >
                        -
                      </button>
                      <input value={productQuantity} />
                      <button
                        // onClick={() => handleAddorRemoveQuantity(product, +1)}
                        onClick={() => handleAddQty()}
                      >
                        +
                      </button>{' '}
                      | Ksh. {parseFloat(product.price_in_2dp).toFixed(2)}
                    </div>
                    <p>
                      Total: Ksh.{' '}
                      {parseFloat(
                        product.price_in_2dp * productQuantity
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
          <button onClick={onOpenModal} id='pay-button-checkout'>
            Pay
          </button>
        </section>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        className='checkout-modal'
      >
        <div className='checkout-popup-container'>
          <img src={mpesaImg} alt='Mpesa' />
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
