import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Cart.css';
// https://react-responsive-modal.leopradel.com/
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import mpesaImg from '../../img/Lipanampesa.png';
import safMpesa from '../../img/sararicom-mpesa.png';

function Cart({
  cart,
  setCart,
  cartCount,
  productQuantity,
  cartItems,
  setCartItems,
  products,
  setCartCount,
  // handleAddorRemoveQuantity,
  handleReduceQty,
  handleAddQty,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState('');
  const [mpesaError, setMpesaError] = useState([]);
  const [amount, setAmount] = useState(0);
  let [sumTotal, setSumTotal] = useState('');
  const cartProducts = cartItems?.map((item) => {
    const productDetails = products?.find(
      (product) => product.id == item.product_id
    );
    return {
      ...productDetails,
      quantity: item.quantity,
      order_id: item.order_id,
      cart_id: item.id,
    };
  });

  // Modal Popup Component
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);

  // Adds Prices to get Total price
  const handlePrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price_in_2dp * productQuantity;
    });
    setTotalPrice(total);
  };

  let total = cart.map((e) => {
    return e.price_in_2dp;
  });

  // Call the function on render
  useEffect(() => {
    total.length === 0
      ? setSumTotal(0)
      : setSumTotal(total.reduce((a, b) => a + b, 0));
    handlePrice();
  }, [setSumTotal, total]);

  // Fiters out Products from Cart
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    setCartCount(arr.length);
  };

  // useEffect(() => {
  //   fetch("https://newlife-backend-production.up.railway.app/carts")
  // })

  const handlePostToCart = (item) => {
    fetch('https://newlife-backend-production.up.railway.app/shopping_carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
  };

  const handleDeleteFromCart = (item) => {
    fetch(
      `https://newlife-backend-production.up.railway.app/shopping_carts/${item.id}`,
      {
        method: 'DELETE',
      }
    );
  };

  const handleMpesaPrompt = (e) => {
    e.preventDefault();
    fetch(`https://2475-102-215-78-19.in.ngrok.io/stkpush`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber: phone, amount: 100 }),
    }).then((response) => {
      if (response.ok) {
        response.json().then(() => {
          alert(`A payment prompt has been sent to your phone`);
          console.log(response);
        });
      } else {
        response.json().then((err) => {
          setMpesaError(err);
        });
      }
    });
  };

  function getTotalPrice(cartProducts) {
    const totalPrice = cartProducts.reduce((total, curr) => {
      return total + curr.price_in_2dp * curr.quantity;
    }, 0);
    return Math.round(totalPrice * 100) / 100;
  }

  function getTotalItems(cartProducts) {
    return cartProducts.reduce((total, curr) => {
      return total + curr.quantity;
    }, 0);
  }

  function updateDatabaseQty(cartId, newQuantity) {
    fetch(
      `https://newlife-backend-production.up.railway.app/shopping_carts/${cartId}`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({ quantity: newQuantity }),
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((updatedCartItem) => {
          const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id != updatedCartItem.id) {
              return cartItem;
            } else {
              return updatedCartItem;
            }
          });

          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
          setCartItems(newCartItems);
        });
      } else {
        res.json().then((errors) => console.warn(errors));
      }
    });
  }

  function handleQtyChange(e, product, method) {
    const cartId = product.cart_id;
    let newQuantity = null;

    if (method === 'inputValue') {
      newQuantity = e.target.value;
    } else if (method === 'addOne') {
      newQuantity = product.quantity + 1;
    } else if (method == 'subtractOne') {
      newQuantity = product.quantity - 1;
    }

    updateDatabaseQty(cartId, newQuantity);
  }

  function handleRemoveFromCart(product) {
    const deletedCartItem = product.cart_id;

    fetch(
      `https://newlife-backend-production.up.railway.app/shopping_carts/${deletedCartItem}`,
      {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      }
    ).then((res) => {
      if (res.ok) {
        const newCartItems = cartItems.filter(
          (item) => item.id != deletedCartItem
        );
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      } else {
        res.json().then((errors) => console.warn(errors));
      }
    });
  }

  // console.log(cart);

  // console.log("cart products: ", cartProducts)

  return (
    <div className='cart-main-container'>
      <h1 style={{ color: '#1d3e68' }}>Cart</h1>
      <br />

      <div className='cart-container'>
        <section className='cart-cards'>
          {/* --.map is not a function--
          --https://stackoverflow.com/a/70817122/20689462-- */}
          {cartProducts?.length ? (
            cartProducts.map((product) => {
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
                        onClick={(e) =>
                          handleQtyChange(e, product, 'subtractOne')
                        }
                        id='cart-qty-btns'
                      >
                        -
                      </button>
                      <input
                        value={product.quantity}
                        onChange={(e) =>
                          handleQtyChange(e, product, 'inputValue')
                        }
                      />
                      <button
                        // onClick={() => handleAddorRemoveQuantity(product, +1)}
                        onClick={(e) => handleQtyChange(e, product, 'addOne')}
                        id='cart-qty-btns'
                      >
                        +
                      </button>{' '}
                      | Ksh. {parseFloat(product.price_in_2dp).toFixed(2)}
                    </div>
                    <p>
                      Total: Ksh.{' '}
                      {parseFloat(
                        product.price_in_2dp * product.quantity
                      ).toFixed(2)}
                    </p>
                  </section>
                  <i
                    class='fa-regular fa-circle-xmark'
                    onClick={() => handleRemoveFromCart(product)}
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
            Ksh. {getTotalPrice(cartProducts)}
          </h2>
          <br />
          <h2>Total Items: {getTotalItems(cartProducts)}</h2>
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
        {cartItems.length > 0 ? (
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
              <form className='checkout-form' onSubmit={handleMpesaPrompt}>
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
                  <input readOnly value={getTotalPrice(cartProducts).toFixed(0)} />
                </label>
                <br />

                <button type='submit'>Send Prompt</button>
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
            <br />
          </div>
        )}
      </Modal>

      <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
        <br />
        <br />
        <img src={safMpesa} alt='saf mpesa' />
        <h1>FAQ</h1>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatem in provident corrupti. Itaque quaerat eligendi
            exercitationem reprehenderit harum quae voluptas fugit sequi
            delectus nesciunt, incidunt dolor expedita sapiente sed.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae aspernatur dolorem natus, debitis ut magni eligendi,
            sint modi nulla officiis quaerat fugit officia facilis autem eaque
            consectetur, consequuntur doloremque.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            officia aperiam et a labore quia laborum soluta excepturi voluptate,
            ratione ex dolorem ullam porro id. Commodi, modi est. Doloribus, a!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            corrupti optio libero ullam! Itaque quam ipsa excepturi magni
            repellendus expedita perferendis ut delectus iusto tenetur
            dignissimos enim incidunt, explicabo eaque.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatem in provident corrupti. Itaque quaerat eligendi
            exercitationem reprehenderit harum quae voluptas fugit sequi
            delectus nesciunt, incidunt dolor expedita sapiente sed.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae aspernatur dolorem natus, debitis ut magni eligendi,
            sint modi nulla officiis quaerat fugit officia facilis autem eaque
            consectetur, consequuntur doloremque.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            officia aperiam et a labore quia laborum soluta excepturi voluptate,
            ratione ex dolorem ullam porro id. Commodi, modi est. Doloribus, a!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            corrupti optio libero ullam! Itaque quam ipsa excepturi magni
            repellendus expedita perferendis ut delectus iusto tenetur
            dignissimos enim incidunt, explicabo eaque.
          </p>
        </section>
      </Modal>
    </div>
  );
}

export default Cart;
