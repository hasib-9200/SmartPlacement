import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupModal from "./SignupModal";
import "../Style/styles.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

// import linq from "linq";
// import Enumerable from "linq";
export let database = [
  {
    username: "name",
    password: "password"
  },
  {
    username: "anmstha123@gmail.com",
    password: "password1"
  }
];





const Login = () =>  {
    // React States

    
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUserName] = useState([]);
    const [password, setPassword] = useState([]);
    // let history = useHistory();
    // User Login info
    const errors = {
      pass: "invalid username or password"
    };

  const loginUser=(event)=>{
    event.preventDefault();
    Axios.post("/login",{
      username:username, 
      password:password
    }).then((response)=>{
      if(response.data.message){
        setIsSubmitted(false);
        localStorage.setItem("isSubmitted", false);
        setErrorMessages({ name: "pass", message: errors.pass });
      } else{
        setIsSubmitted(true);
        localStorage.setItem("isSubmitted", true);
        window.location.href = '/StudentHomepage';
      }
    });
};

  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );


  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={loginUser}>
          <div className="input-container">
            <label>Username </label>
            <input type="email" name="uname" required onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required
            onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
            {renderErrorMessage("pass")}
          </div>
          <Button variant="primary" as="input" type="submit" value="Login" />{' '}
          <div className="forgotPassword">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
          <br/>
          <div class="col-md-12 text-center">
            <Button variant="success" className="signUp" onClick={() => setModalShow(true)}>Sign Up</Button>
          </div>
        </form>
      </div>
    );
    return (
        <div className="app">
          <div className="flex-item slogan">
              <div className="sloganTitle">Smart Placement </div>
              <div className="sloganStatement">We help you with all your placement needs. </div>
          </div>
          <div className="flex-item login-form">
              {renderForm}
          </div>
          <SignupModal show={modalShow} onHide={() => setModalShow(false)}/>
          <div>{loginStatus}</div>
        </div>
    );
}
export default Login
