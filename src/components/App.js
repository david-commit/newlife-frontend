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
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);

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
      <NavBar />
      <Switch>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/patients/me'>
          <Patient />
        </Route>
        <Route exact path='/patients/me/create-appointment'>
          <PatientCreateAppointment />
        </Route>
        <Route exact path='/patients/me/appointments'>
          <PatientAppointments />
        </Route>
        <Route exact path='/patients/me/chat'>
          <PatientChat />
        </Route>
        <Route exact path='/patients/me/reviews'>
          <PatientReviews />
        </Route>
        <Route exact path='/practitioners/me'>
          <Practitioner />
        </Route>
        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/products'>
          <Shop products={products} handleSearch={handleSearch} loading={loading}/>
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
