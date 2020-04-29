import React, {useState} from 'react';
import axios from 'axios';
import Footer from './Footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

function LoginForm(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }
    // const handleLogin = (user) => {
    //     props.history.push ("/my-page")
    // }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios( {
            url: 'http://localhost:3001/api/v1/sessions',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            data: {
                email: username,
                password
            }
        })
        .then(response => {
            localStorage.setItem("token", response.data.jwt)
            props.history.push ("/my-page")
            // handleLogin(response.data.user)

        })
        .catch(error => {
          console.log(error)
        })
        setUsername("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={handleSubmit}>
                <p className="h5 text-center mb-4">Log In</p>
                <div className="grey-text">
                  <MDBInput label="Type your email" value={username} onChange={handleUsernameChange} icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                  <MDBInput label="Type your password" value={password} onChange={handlePasswordChange} icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit">Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </div>


      
    )
} 

export default LoginForm
