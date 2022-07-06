import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from './components/navbar/navbar'
import LoginPage from "./pages/login_page/login_page";
import HomePage from "./pages/home_page/home_page";
import ClockInPage from "./pages/clock_in_page/clock_in_page";
import AuthApi from "./apis/auth_api/auth_api";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  var login = async (username, password) => {
    let data = await AuthApi.login(username, password)
    setCurrentUser(data.user)
  }

  var logout = () => {
    AuthApi.logout()
    setCurrentUser(null)
  }

  useEffect(() => {
    if (!user) {
      var user = localStorage.getItem("user")
      setCurrentUser(JSON.parse(user))
    }
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