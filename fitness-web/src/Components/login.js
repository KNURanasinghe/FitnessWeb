import React, { useState } from "react";
import './login.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Asanga",
      password: "12345",
      password1: "12345"
    },
    {
      username: "user2",
      password: "pass2",
      password1: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var { uname, pass } = event.target.elements;

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    try {
      // Check if user info exists and password matches
      if (userData && (userData.password === pass.value || userData.password1 === pass.value)) {
        setIsSubmitted(true);
        history.push('/home');
      } else {
        // Authentication failed
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} className="formBox">
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="rap">
          <div className="title">Login</div>
          {isSubmitted ? <div>User is successfully Signed Up</div> : renderForm}
        </div>
      </div>
    </div>
  );
}

export default Login;
