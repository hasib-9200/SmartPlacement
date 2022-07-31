import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import StudentHomepage from "./Pages/StudentHomepage";
import ForgotPassword from "./Pages/ForgotPassword";


function App() {

  return(

    <Router>
      <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/StudentHomepage" component = {StudentHomepage}/>
        <Route exact path="/forgotpassword" component = {ForgotPassword}/>
      </Switch>
    </Router>
  )

}

export default App;
