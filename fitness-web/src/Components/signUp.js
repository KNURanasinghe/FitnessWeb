import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './styles.css';


function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
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
    pass1: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, pass1 } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value && userData.password1 !== pass1.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
       
      } else {
        setIsSubmitted(true);
        history.push('/login');
      }
    } else {
      // Username not found
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
      
      <form onSubmit={handleSubmit}>
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
        <div className="input-container">
          <label> Re Enter Password </label>
          <input type="password" name="pass1" required />
          {renderErrorMessage("pass1")}
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
        <div className="title">SignUp</div>
        {isSubmitted ? <div>User is successfully Signed Up</div> : renderForm}
      </div>
      </div>
    </div>
  );
}

export default SignUp;