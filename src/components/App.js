import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'
import SignUp from './SignUp/SignUp';
import Login from './Login/Login'
import Patient from './Patient/Patient'
import Practitioner from './Practitioner/Practitioner'
import Shop from './Shop/Shop'

function App() {
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
        <Route exact path='/practitioners/me'>
          <Practitioner />
        </Route>
        <Route exact path='/aboutus'>
          <AboutUs />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
