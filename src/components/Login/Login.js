import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Login.css";

function Login({ loggedIn, setLoggedIn, userType, setUserType, setCartItems }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    prac_checkbox: false,
  });
  const [error, setError] = useState("");
  const patientLoginLink = "https://newlife-backend-production.up.railway.app/login";
  const practitionerLoginLink = "https://newlife-backend-production.up.railway.app/practitioner/login";
  const history = useHistory();

  if (loggedIn) {
    if (userType == "patient") {
      history.push("/patients/me");
    } else if (userType == "practitioner") {
      history.push("/practitioners/me");
    } else if (userType == "admin") {
      history.push("/admin/me");
    }
  }

  function getAndStoreCartData(patientId){
    fetch(`https://newlife-backend-production.up.railway.app/users/${patientId}/cart`, {
      headers: {"Accept": "application/json", "Authorization": localStorage.getItem("token")}
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          localStorage.setItem('cartItems', JSON.stringify(data))
          setCartItems(data)
        })
      }else{
        res.json().then(errors => console.warn(errors))
      }
    })
  }

  function handleLoginSubmit(e) {
    const loginLink = formData.prac_checkbox
      ? practitionerLoginLink
      : patientLoginLink;
    console.log(formData);
    e.preventDefault();
    // setPracCheckbox(false);
    fetch(loginLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((person) => {
          console.log(person.id);
          // setUserId(person.id);
          localStorage.setItem("token", person.jwt);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem(
            "userType",
            formData.prac_checkbox ? "practitioner" : "patient"
          );

          if (formData.prac_checkbox) {
            localStorage.setItem("person", JSON.stringify(person.practitioner));
            setLoggedIn(true);
            setUserType("practitioner");
            history.push("/practitioners/me");
          } else {
            getAndStoreCartData(person.user.id)
            localStorage.setItem("person", JSON.stringify(person.user));
            setLoggedIn(true);
            setUserType("patient");
            history.push("/patients/me");
          }
        });
      } else {
        response.json().then(setError("Invalid username or password"));
        console.log(error);
      }
    });
  }
  function updateFormData(e) {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }));
  }

  return (
    <div className="login-main-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <p>Schedule an appointment now</p>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={updateFormData}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={updateFormData}
          />
          <label id="practitioner-check">
            <input
              id="prac_checkbox"
              type="checkbox"
              value={formData.prac_checkbox}
              onChange={updateFormData}
            />
            &nbsp; Log in as practitioner
          </label>
          <button type="submit">Log In</button>
        </form>
        <br />

        {error ? (
          <>
            <div className="login-error-display">
              {
                <p key={error} style={{ color: "red" }}>
                  {error}
                </p>
              }
            </div>
            <br />
          </>
        ) : (
          ""
        )}

        <div className="already">
          <hr />
          <p>
            Forgot password?{" "}
            <Link to="/reset-password" id="reset-text">
              Reset
            </Link>
          </p>
          <p>
            Don't have an account? &nbsp;
            <Link to={`/signup`}>
              <button type="button">Sign Up</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="login-img"></div>
    </div>
  );
}

export default Login;
