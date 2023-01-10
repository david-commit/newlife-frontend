import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState("");

  function handleSignupSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: firstName,
        email,
        password,
        password_confirmation: cPassword,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            console.log("Success");
          } else {
            console.log("Fail");
          }
        }),
    });
  }

  return (
    <div className="signup-main-container">
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <h1>Signup</h1>
          <p>Register as a patient</p>
          <input
            type="text"
            placeholder="User Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button to="/login" type="submit">
            Sign Up
          </button>
        </form>

        <br />
        {/* {errors ? (
          <div className="signup-error-display">
            {errors.map((error) => {
              console.log(error);
              return (
                <li key={error} style={{ color: "red" }}>
                  {error}
                </li>
              );
            })}
          </div>
        ) : (

        )} */}

        <div className="already">
          <hr />
          <p>
            Already have an account? &nbsp;
            <Link to={`/login`}>
              <button type="button">Log In</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="signup-img"></div>
    </div>
  );
}

export default SignUp;
