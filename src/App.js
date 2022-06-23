import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/login" component = {Login}/>
        <Route exact path="/homepage" component = {()=><Homepage authorized={true}/>}/>
      </Switch>
    </Router>
  )

}

export default App;