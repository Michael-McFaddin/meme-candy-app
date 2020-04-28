// import React, { Component } from "react";
// import Footer from './Footer';
// import axios from 'axios';


// export default class Login extends Component {
  
//   Login(formData) {
//       console.log('form data was received', formData);
//     }


   
//     render() {
//         return (
//           <div>
//               <form>
//                   <h3>Log In</h3>

//                   <div className="form-group">
//                       <label>Email address</label>
//                       <input type="email" className="form-control" placeholder="Enter email" />
//                   </div>

//                   <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" className="form-control" placeholder="Enter password" />
//                   </div>

//                   <button type="submit" className="btn btn-primary btn-block" onSubmit={this.Login.bind(this)}>Submit</button>
              
//               </form>
//             <Footer />
//           </div>
//         );
//     }
// }



import React, {useState} from 'react';
import axios from 'axios';

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
            <div style={formDivStyle}>
            <h1>Log In</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 

export default LoginForm