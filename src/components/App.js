import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import EditPractitioner from './Admin/EditPractitioner';
import EditProduct from './Admin/EditProduct';
import AddPractitionerProfile from './AddPractitioner/AddPractitionerProfile';

function App() {
  const [userAdmin, setUserAdmin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('loggedIn'));
  const [userType, setUserType] = useState(localStorage.getItem('userType'));
  const [products, setProducts] = useState([]);
  const [userPatient, setUserPatient] = useState('');
  const [userPractitioner, setUserPractitioner] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState({});
  const [cartWarning, setCartWarming] = useState(false);
  const [cartAddSuccess, setCartSuccess] = useState(false);
  const [sortProducts, setSortedProducts] = useState('');
  let [dosage, setDosage] = useState([]);
  const [sortAsc] = useState('');
  const [sortDesc] = useState('price-desc');
  const [productCategories] = useState([]);
  const [cartItems, setCartItems] = useState([])


  // console.log(loggedIn);
  // Initializing the value of each product with value 1
  // Products are identified by their ids (ids are used as keys)
  useEffect(() => {
    const newProductQuantity = {};
    cart.forEach((product) => {
      newProductQuantity[product.id] = 1;
    });

    setProductQuantity(newProductQuantity);
  }, []);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // const response = await fetch('https://fakestoreapi.com/products');
      const response = await fetch('http://localhost:3000/products');
      const results = await response.json();

      // Sort Products Logic on shop page
      sortProducts === 'price-asc'
        ? setProducts(
            results &&
              results.sort((a, b) => (a.price_in_2dp > b.price_in_2dp ? 1 : -1))
          )
        : sortProducts === 'price-desc'
        ? setProducts(
            results &&
              results.sort((a, b) => (a.price_in_2dp < b.price_in_2dp ? 1 : -1))
          )
        : setProducts(results);

      // Render products based on search
      setSearchQuery(results);

      setLoading(false);
    };
    fetchProducts();
  }, [sortProducts]);

  // Handle search feature
  const handleSearch = (e) => {
    setProducts(
      searchQuery.filter((product) => {
        return product.name
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

  // // Quantity Add Button on Product Page
  function handleAddQty(product) {
    setProductQuantity((productQuantity) => {
      if (!productQuantity[product.id]) {
        return { ...productQuantity, [product.id]: 1 };
      } else {
        const newQuantity = productQuantity[product.id] + 1;
        return { ...productQuantity, [product.id]: newQuantity };
      }
    });
  }

  // Quantity Reduce Button on Product Page
  function handleReduceQty(product) {
    if (productQuantity[product.id] <= 1) {
      alert("Quantity cannot be less than 1");
    } else {
      setProductQuantity((prevQuantity) => {
        const newQuantity = prevQuantity[product.id] - 1;
        return { ...prevQuantity, [product.id]: newQuantity };
      });
    }
  }
  
  // Get & Store all product categories
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => {
        data.map((d) => productCategories.push(d.category));
      });
  }, []);

  // Removes duplicates in array
  const uniqueCategoryArray = [...new Set(productCategories)];
  // console.log(uniqueCategoryArray);

  return (
    <div className="App">
      <NavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        userType={userType}
        setUserType={setUserType}
        // userPatient={userPatient}
        // userPractitioner={userPractitioner}
        // setUserPatient={setUserPatient}
        // setUserPractitioner={setUserPractitioner}
        cartCount={cartCount}
      />
      <Switch>
        <Route exact path="/signup">
          <SignUp
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userType={userType}
            setUserType={setUserType}
            setCartItems={setCartItems}
          />
        </Route>
        <Route exact path="/login">
          <Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userType={userType}
            setUserType={setUserType}
            setCartItems={setCartItems}
          />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword loggedIn={loggedIn} userType={userType} />
        </Route>
        {/* == PATIENT ROUTES */}
        <Route exact path="/patients/me">
          <Patient loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/me/create-appointment">
          <PatientCreateAppointment loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/me/appointments">
          <PatientAppointments loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/me/chat">
          <PatientChat loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/me/reviews">
          <PatientReviews loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/me/calendar">
          <PatientCalendar loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/patients/details-popup">
          <PatientDetailsPopup loggedIn={loggedIn} userType={userType} />
        </Route>
        {/* == PATIENT ROUTES */}
        {/* == PRACTITIONER ROUTES */}
        <Route exact path="/practitioners/me">
          <Practitioner loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/practitioners/me/create-appointment">
          <PractitionerCreateAppointment
            loggedIn={loggedIn}
            userType={userType}
          />
        </Route>
        <Route exact path="/practitioners/me/appointments">
          <PractitionerAppointments loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/practitioners/me/chat">
          <PractitionerChat loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/practitioners/me/reviews">
          <PractitionerReviews loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/practitioners/me/calendar">
          <PractitionerCalendar loggedIn={loggedIn} userType={userType} />
        </Route>
        overflow: ;{/* == PRACTITIONER ROUTES */}
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/products">
          <Shop
            products={products}
            handleSearch={handleSearch}
            loading={loading}
            setCart={setCart}
            handleAddToCart={handleAddToCart}
            cartWarning={cartWarning}
            cartAddSuccess={cartAddSuccess}
            sortAsc={sortAsc}
            sortDesc={sortDesc}
            sortProducts={sortProducts}
            setSortedProducts={setSortedProducts}
          />
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        <Route path={`/products/:productID`}>
          {userType == "practitioner" || userType == "patient" ? (
            <ProductPage
              handleAddToCart={handleAddToCart}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
              cartWarning={cartWarning}
              handleAddQty={handleAddQty}
              handleReduceQty={handleReduceQty}
              loggedIn={loggedIn}
              userType={userType}
              dosage={dosage}
              setDosage={setDosage}
            />
          ) : (
            ""
          )}
        </Route>
        <Route exact path="/cart">
          {userType == "practitioner" || userType == "patient" ? (
            <Cart
              cart={cart}
              setCart={setCart}
              cartCount={cartCount}
              setCartCount={setCartCount}
              productQuantity={productQuantity}
              handleAddQty={handleAddQty}
              handleReduceQty={handleReduceQty}
              loggedIn={loggedIn}
              userType={userType}
            />
          ) : (
            ""
          )}
        </Route>
        {/* == BOTH PRACTITIONER & PATIENT Routes */}
        {/* == ADMIN ROUTES == */}
        <Route exact path="/admin/practitioner/edit/:id">
          <EditPractitioner loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/admin/product/edit/:id">
          <EditProduct loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="/admin/login">
          <AdminLogin
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userType={userType}
            setUserType={setUserType}
          />
        </Route>
        <Route exact path="/admin/me">
          {userAdmin ? (
            <Admin loggedIn={loggedIn} userType={userType} />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        <Route exact path="/admin/all-practitioners">
          {userAdmin ? (
            <AllPractitioners loggedIn={loggedIn} userType={userType} />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        <Route exact path="/admin/add-practitioner">
          {userAdmin ? (
            <AddPractitioner loggedIn={loggedIn} userType={userType} />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        <Route exact path='/admin/add-practitioner-profile'>
          {userAdmin ? (
            <AddPractitionerProfile loggedIn={loggedIn} userType={userType} />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        <Route exact path='/admin/products'>
          {userAdmin ? (
            <AllProducts
              loggedIn={loggedIn}
              userType={userType}
              handleSearch={handleSearch}
            />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        <Route exact path="/admin/add-product">
          {userAdmin ? (
            <AddProduct
              loggedIn={loggedIn}
              userType={userType}
              uniqueCategoryArray={uniqueCategoryArray}
            />
          ) : (
            <AdminLogin
              setUserAdmin={setUserAdmin}
              loggedIn={loggedIn}
              userType={userType}
            />
          )}
        </Route>
        {/* == ADMIN ROUTES == */}
        <Route exact path="/">
          <Home loggedIn={loggedIn} userType={userType} />
        </Route>
        <Route exact path="*">
          <PageNotFound loggedIn={loggedIn} userType={userType} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
