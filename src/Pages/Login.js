import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupModal from "./SignupModal";
import "../Style/styles.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export let database = [
  {
    username: "name",
    password: "password"
  },
  {
    username: "anmstha123@gmail.com",
    password: "password1"
  },
];

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  let history = useHistory();
  // User Login info
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem("isSubmitted", true);
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
          <input type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <Button variant="primary" as="input" type="submit" value="Login" />{' '}
        <div className="forgotPassword">
          <a href="/forgotpassword">Forgot Password?</a>
        </div>
        <br />
        <div class="col-md-12 text-center">
          <Button variant="success" className="signUp" onClick={() => setModalShow(true)}>Sign Up</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="slogan">
        <div className="sloganTitle">Smart Placement </div><br />
        <div className="sloganStatement">We help you with all your placement needs. </div>
      </div>
      <div className="login-form">
        {isSubmitted ? history.push("/homepage") : renderForm}
      </div>
      <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Login