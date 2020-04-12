import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login';
import '../style.css';

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <h3>Amazing Lash Online Booking WEB</h3>
          <NavLink to="/login">Login/Sign Up</NavLink>
        </header>        
      </div>
    )
  }
}

export default Main;