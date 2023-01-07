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
import AddPractitioner from "./AddPractitioner/AddPractitioner"
import AddProduct from "./AddProduct/AddProduct"
import AllProducts from './AllProducts/AllProducts';
import AllProducts from './A';
function App() {
  const [userAdmin, setUserAdmin] = useState(true)
  const [userPatient, setUserPatient] = useState(true);
  const [userPractitioner, setUserPractitioner] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    }
  ]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(cart)

  useEffect(() => {
    // auto-login for both user and practitioner
    userPatient ? (
      fetch(`patients/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUserPatient(user));
        }
      })
    ) : userPractitioner ? (
      fetch(`practitioners/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUserPractitioner(user));
        }
      })
    ) : (
      <Home />
    );
  }, [userPatient, userPractitioner]);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
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

  const handleAddToCart = (product) => {
    // cart.push(product)
    setCart((cart) => [...cart, product])
    setCartCount(cart.length)

    // CHECKS IF PRODUCT EXISTS IN CART
    // const exist = cart.find((x) => x.id === product.id);
    // if (exist) {
    //   return cart.map((x) =>
    //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
    //   );
    // } else {
    //   return {...cart}
    // }
    // console.log(cart)
  };

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
          <Login />
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
        <Route exact path='/practitioners/me/reviews'>
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
          />
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        <Route path={`/products/:productID`}>
          {userPatient || userPractitioner || userAdmin ? (
            <ProductPage handleAddToCart={handleAddToCart} />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path='/cart'>
          {userPatient || userPractitioner ? (
            <Cart cart={cart} cartCount={cartCount} />
          ) : (
            <Login />
          )}
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        {/* == ADMIN ROUTES == */}
        <Route exact path='/admin/login'>
          <AdminLogin setUserAdmin={setUserAdmin} />
        </Route>
        <Route exact path='/admin'>
          {userAdmin ? (
            <Admin userAdmin={userAdmin} />
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
