import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/styles.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


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

      const MyVerticallyCenteredModal=(props) =>{
        return (
          <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up
                <h6>Quick and easy</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
            <div class="input-group">
              <input type="text" className="form-control" placeholder="First name"/>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" style={{background:"#2c9ad9", border:"#2c9ad9"}}>
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">sign in?</a>
            </p>
          </form>
            </Modal.Body>
          </Modal>
        );
      }
  
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
          <Button as="input" type="submit" value="Login" />{' '}
          <div className="forgotPassword">
            <a href="aaa.html">Forgot Password?</a>
          </div>
          <br/>
          <div class="col-md-12 text-center">
            <Button variant="primary" style={{background:"#2c9ad9", border:"#2c9ad9"}} onClick={() => setModalShow(true)}>Sign Up</Button>
          </div>
        </form>
      </div>
    );
    
    let history = useHistory();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="app">
            <div className="slogan">
                <div className="sloganTitle">Smart Placement </div><br/>
                <div className="sloganStatement">We help you with all your placement needs. </div>
            </div>
            <div className="login-form">
                {isSubmitted ? history.push("/homepage"): renderForm}
            </div>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}
export default Login