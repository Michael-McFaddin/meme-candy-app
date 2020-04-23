import React from 'react';
import Header from './Header';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/my-page">MyPage</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Header />
       </div>
    );
}
 
export default Navigation;
