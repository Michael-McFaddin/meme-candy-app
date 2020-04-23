import React from 'react';
import Login from "./components/Login.js";
import SignUp from "./components/Signup.js";
import Index from "./components/Index.js";
import Test from "./Test.js"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/index"}>Index</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/test"}>Test</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/index" component={Index} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;