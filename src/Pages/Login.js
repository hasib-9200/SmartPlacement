import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import SignupButton from "../components/SignupButton";
import "../Style/styles.css";

const Login = () =>  {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "name",
        password: "password"
      },
      {
        username: "name1",
        password: "password1"
      }
    ];
  
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
          <SubmitButton/>
          <div className="forgotPassword">
            <a href="aaa.html">Forgot Password?</a>
          </div>
          <SignupButton style={{textAlign: 'center', top:'100px'}}/>
        </form>
      </div>
    );
    
    let history = useHistory();
    return (
        <div className="app">
            <div className="slogan">
                <div className="sloganTitle">Smart Placement </div><br/>
                <div className="sloganStatement">We help you with all your placement needs. </div>
            </div>
            <div className="login-form">
                {isSubmitted ? history.push("/homepage"): renderForm}
            </div>
        </div>
    );
}
export default Login