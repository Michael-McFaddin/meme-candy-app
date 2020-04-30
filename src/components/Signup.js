import React, { Component } from "react";
import axios from "axios";
import Footer from './Footer';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      signupErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    const { name, email, password, password_confirmation } = this.state;
    axios
      .post(
        'http://localhost:3001/api/v1/users',
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        }
        // { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data );
        }
      })
      .then(this.props.history.push("/log-in"))
      .catch(error => {
        console.log("signup error", error);
        alert(JSON.stringify(error.response.data.errors));
      });
    event.preventDefault();
  }
  render() {
    return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput 
                  label="Your name" 
                  icon="user" 
                  name="name"  
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                  group type="name" 
                  validate error="wrong"
                  success="right" 
                />
                <MDBInput 
                  label="Your email" 
                  icon="envelope" 
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  group type="email" 
                  validate error="wrong"
                  success="right" 
                />
                <MDBInput 
                  label="Your password" 
                  icon="lock"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required 
                  group type="password" 
                  validate error="wrong"
                  success="right" 
                />
                <MDBInput 
                  label="Confirm your password" 
                  icon="exclamation-triangle"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required 
                  group type="password" 
                  validate error="wrong" 
                  success="right" 
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit" >Sing Up</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
    );
  }
}