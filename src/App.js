import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import MyPage from './components/MyPage';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

 
export default class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/my-page" component={MyPage}/>
              <Route path="/log-in" component={Login}/>
              <Route path="/sign-up" component={Signup}/>
              <Route path="/log-out" component={Logout}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
