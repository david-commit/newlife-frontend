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

function App() {
  const [userPatient, setUserPatient] = useState(false);
  const [userPractitioner, setUserPractitioner] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div className='App'>
      <NavBar
        userPatient={userPatient}
        userPractitioner={userPractitioner}
        setUserPatient={setUserPatient}
        setUserPractitioner={setUserPractitioner}
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
        {/* == PATIENT ROUTES */}

        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/products'>
          <Shop
            products={products}
            handleSearch={handleSearch}
            loading={loading}
          />
        </Route>
        <Route path={`/products/:productID`}>
          <ProductPage />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
