import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from './components/navbar/navbar'
import LoginPage from "./pages/login_page/login_page";
import HomePage from "./pages/home_page/home_page";
import ClockInPage from "./pages/clock_in_page/clock_in_page";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  var login = (username, password) => {
    let user = { username: username, password: password }
    localStorage.setItem("user", JSON.stringify(user))
    setCurrentUser(user)
  }

  var logout = async () => {
    localStorage.removeItem("user")
    setCurrentUser(null)
  }

  useEffect(() => {
    var user = localStorage.getItem("user")
    setCurrentUser(JSON.parse(user))
  })


  return (
    <Router>
      <div>
        <Navbar currentUser={currentUser} logout={logout} />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LoginPage login={login} />
          </Route>
          <Route exact path="/home">
            <HomePage currentUser={currentUser} />
          </Route>
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/clock-in-page" component={ClockInPage} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;