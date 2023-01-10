import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Patient from './Patient/Patient';
import Practitioner from './Practitioner/Practitioner';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import PatientCreateAppointment from './PatientCreateAppointment/PatientCreateAppointment';
import PatientAppointments from './PatientAppointments/PatientAppointments';
import PatientChat from './PatientChat/PatientChat';
import PatientReviews from './PatientReviews/PatientReviews';
import ProductPage from './ProductPage/ProductPage';
import PractitionerCreateAppointment from './PractitionerCreateAppointment/PractitionerCreateAppointment';
import PageNotFound from './PageNotFound/PageNotFound';
import PractitionerAppointments from './PractitionerAppointments/PractitionerAppointments';
import PractitionerChat from './PractitionerChat/PractitionerChat';
import PractitionerReviews from './PractitionerReviews/PractitionerReviews';
import Cart from './Cart/Cart';
import PatientCalendar from './PatientCalendar/PatientCalendar';
import PractitionerCalendar from './PractitionerCalendar/PractitionerCalendar';
import Admin from './Admin/Admin';
import AdminLogin from './AdminLogin/AdminLogin';
import AddPractitioner from './AddPractitioner/AddPractitioner';
import AddProduct from './AddProduct/AddProduct';
import AllProducts from './AllProducts/AllProducts';
import AllPractitioners from './AllPractitioners/AllPractitioners';
import PatientDetailsPopup from './PatientDetailsPopup/PatientDetailsPopup';
import ResetPassword from './ResetPassword/ResetPassword';

function App() {
  const [userAdmin, setUserAdmin] = useState(true);
  const [userPatient, setUserPatient] = useState(true);
  const [userPractitioner, setUserPractitioner] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [cartWarning, setCartWarming] = useState(false);
  const [cartAddSuccess, setCartSuccess] = useState(false);

  useEffect(() => {
    // auto-login for patient, practitioner & Admin
    userPatient ? (
      fetch(`/api/patients/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUserPatient(user));
        }
      })
    ) : userPractitioner ? (
      fetch(`/api/practitioners/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUserPractitioner(user));
        }
      })
    ) : userAdmin ? (
      fetch(`/api/admin/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUserAdmin(user));
        }
      })
    ) : (
      <Home />
    );
  }, [userPatient, userPractitioner, userAdmin]);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // const response = await fetch('https://fakestoreapi.com/products');
      const response = await fetch('http://localhost:3000/products');
      const results = await response.json();

      setProducts(results);
      setSearchQuery(results);

      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Handle search feature
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

  const handleAddToCart = (item) => {
    // CHECK IF ITEM EXISTS IN CART
    let exist = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        exist = true;
        setCartWarming(true);
        setTimeout(() => {
          setCartWarming(false);
        }, 3500);
      }
    });
    if (!exist) {
      cart.unshift(item);
      setCartCount(cart.length);
      setCartSuccess(true);
      setTimeout(() => {
        setCartSuccess(false);
      }, 3500);
    }
  };
  console.log(cart);

  // // Quantity Add Button on Product Page
  function handleAddQty() {
    setProductQuantity((productQuantity) => productQuantity + 1);
  }

  // Quantity Reduce Button on Product Page
  function handleReduceQty() {
    {
      productQuantity < 2
        ? alert('Quantity cannot be less than 1')
        : setProductQuantity((productQuantity) => productQuantity - 1);
    }
  }

  // const handleAddorRemoveQuantity = (item, operator) => {
  //   let ind = -1
  //   cart.forEach((data, index) => {
  //     if (data.id === item.id) {
  //       ind = index
  //     }
  //   })
  //   const tempArray = cart
  //   tempArray[ind] += operator
  //   if (tempArray[ind].productQuantity === 0) {
  //     tempArray[ind].productQuantity = 1
  //   }
  //   setCart([...tempArray])
  // }

  return (
    <div className='App'>
      <NavBar
        userPatient={userPatient}
        userPractitioner={userPractitioner}
        setUserPatient={setUserPatient}
        setUserPractitioner={setUserPractitioner}
        cartCount={cartCount}
      />
      <Switch>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <Login setUserPatient={setUserPatient} setUserPractitioner={setUserPractitioner} />
        </Route>
        <Route exact path='/reset-password'>
          <ResetPassword />
        </Route>
        {/* == PATIENT ROUTES */}
        <Route exact path='/patients/me'>
          {userPatient ? <Patient /> : <Login />}
        </Route>
        <Route exact path='/patients/me/create-appointment'>
          {userPatient ? <PatientCreateAppointment /> : <Login />}
        </Route>
        <Route exact path='/patients/me/appointments'>
          {userPatient ? <PatientAppointments /> : <Login />}
        </Route>
        <Route exact path='/patients/me/chat'>
          {userPatient ? <PatientChat /> : <Login />}
        </Route>
        <Route exact path='/patients/me/reviews'>
          {userPatient ? <PatientReviews /> : <Login />}
        </Route>
        <Route exact path='/patients/me/calendar'>
          {userPatient ? <PatientCalendar /> : <Login />}
        </Route>
        <Route exact path='/patients/details-popup'>
          {userPatient ? <PatientDetailsPopup /> : <Login />}
        </Route>
        {/* == PATIENT ROUTES */}
        {/* == PRACTITIONER ROUTES */}
        <Route exact path='/practitioners/me'>
          {userPractitioner ? <Practitioner /> : <Login />}
        </Route>
        <Route exact path='/practitioners/me/create-appointment'>
          {userPractitioner ? <PractitionerCreateAppointment /> : <Login />}
        </Route>
        <Route exact path='/practitioners/me/appointments'>
          {userPractitioner ? <PractitionerAppointments /> : <Login />}
        </Route>
        <Route exact path='/practitioners/me/chat'>
          {userPractitioner ? <PractitionerChat /> : <Login />}
        </Route>
        <Route
          exact
          path='/practitioners/me/reviews'
        >
          {userPractitioner ? <PractitionerReviews /> : <Login />}
        </Route>
        <Route exact path='/practitioners/me/calendar'>
          {userPractitioner ? <PractitionerCalendar /> : <Login />}
        </Route>
        {/* == PRACTITIONER ROUTES */}
        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/products'>
          <Shop
            products={products}
            handleSearch={handleSearch}
            loading={loading}
            setCart={setCart}
            handleAddToCart={handleAddToCart}
            cartWarning={cartWarning}
            cartAddSuccess={cartAddSuccess}
          />
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        <Route path={`/products/:productID`}>
          {userPatient || userPractitioner || userAdmin ? (
            <ProductPage
              handleAddToCart={handleAddToCart}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
              cartWarning={cartWarning}
              handleAddQty={handleAddQty}
              handleReduceQty={handleReduceQty}
            />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path='/cart'>
          {userPatient || userPractitioner ? (
            <Cart
              cart={cart}
              setCart={setCart}
              cartCount={cartCount}
              setCartCount={setCartCount}
              productQuantity={productQuantity}
              handleAddQty={handleAddQty}
              handleReduceQty={handleReduceQty}
            />
          ) : (
            <Login />
          )}
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        {/* == ADMIN ROUTES == */}
        <Route exact path='/admin/login'>
          <AdminLogin setUserAdmin={setUserAdmin} />
        </Route>
        <Route exacrt path='/admin/me'>
          {userAdmin ? (
            <Admin userAdmin={userAdmin} />
          ) : (
            <AdminLogin setUserAdmin={setUserAdmin} />
          )}
        </Route>
        <Route exact path='/admin'>
          {userAdmin ? (
            <AllPractitioners />
          ) : (
            <AdminLogin setUserAdmin={setUserAdmin} />
          )}
        </Route>
        <Route exact path='/admin/add-practitioner'>
          {userAdmin ? (
            <AddPractitioner />
          ) : (
            <AdminLogin setUserAdmin={setUserAdmin} />
          )}
        </Route>
        <Route exact path='/admin/products'>
          {userAdmin ? (
            <AllProducts />
          ) : (
            <AdminLogin setUserAdmin={setUserAdmin} />
          )}
        </Route>
        <Route exact path='/admin/add-product'>
          {userAdmin ? (
            <AddProduct />
          ) : (
            <AdminLogin setUserAdmin={setUserAdmin} />
          )}
        </Route>
        {/* == ADMIN ROUTES == */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
