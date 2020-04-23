import React, { Component } from "react";
import Footer from './Footer';


export default class Login extends Component {
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

                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
              
              </form>
            <Footer />
          </div>
        );
    }
}