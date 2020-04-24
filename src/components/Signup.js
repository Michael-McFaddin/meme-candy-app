import React, { Component } from "react";
import Footer from './Footer';

export default class SignUp extends Component {
    render() {
        return (
          <div>
              <form>
                  <h3>Sign Up</h3>

                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="Name" />
                  </div>

                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" />
                  </div>

                  <div className="form-group">
                      <label>Password Confirmaton</label>
                      <input type="text" className="form-control" placeholder="Password Confirmaton" />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
              </form>
              < Footer />
          </div>
        );
    }
}