import React from 'react';
import Header from './Header';
 
import { NavLink } from 'react-router-dom';
 
 const Navigation = () => {
    return (

      <div className="App" > 
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "#350350"}} >
          <div className="container">
             <div> 
                <NavLink style={{color: "white"}} className="navbar-brand" to="/">Home</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/my-page">MyPage</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/log-in">Login</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/sign-up">Signup</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/log-out">Logout</NavLink>
                <NavLink style={{color: "white"}} className="navbar-brand" to="/contact">Contact</NavLink>
             </div>
          </div>
        </nav>
          <Header />
      </div>
    );
}
 
export default Navigation;

