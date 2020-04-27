import React, { Component } from "react";
import Footer from './Footer';
import axios from 'axios';


export default class Login extends Component {
  
  Login(formData) {
      console.log('form data was received', formData);
    }


   
    render() {
        return (
          <div>
              <form>
                  <h3>Log In</h3>

                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" onSubmit={this.Login.bind(this)}>Submit</button>
              
              </form>
            <Footer />
          </div>
        );
    }
}