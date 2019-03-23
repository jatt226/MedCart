import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cart from './cart.ico';
import pill from './pill2.ico';

class Header extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={pill} width="40" height="40" alt=""></img>
        
        <a class="navbar-brand" href="#">MedCart</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/Shop">Shop</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">Contact Us</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                contact Us
              </Link>
            
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">Action</Link>
                <Link class="dropdown-item" to="/">Another action</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/">Something else here</Link>
              </div>
            </li> */}
            
            <li class="nav-item">
              <Link class="nav-link"  to="/Login">Log-in</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Registration">Registration</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">About</Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">help</Link>
            </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="search Medicine" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
            <li class="nav-item">
            <Link class="nav-brand" to="/Cart">
            <img src={cart} width="40" height="40" alt=""></img>
            </Link>
              
            </li>
        
        </div>
      </nav>
      
      
      
      
    );
    
  }
}

export default Header ;
