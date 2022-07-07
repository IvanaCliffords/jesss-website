import React from "react";

import logo from "../../assets/logo.png";
import "./navbar.css";
const Navbar = ({ click, show }) => {
  const hamburgerMenuClass = ["hamburger-menu"];
  if (show) {
    hamburgerMenuClass.push("show");
  }


  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <p> <a href="#home">Jess Fit Mom</a></p>
        </div>
        <div className="navbar-div">
          <p className="nav-item" activeClass="nav-item-active">
            <a href="#home">Home</a>
          </p>
          <p className="nav-item" activeClass="nav-item-active">
            <a href="#about">About</a>
          </p>
          <p className="nav-item" activeClass="nav-item-active">
            <a href="#services">Services</a>
          </p>
          <p className="nav-item" activeClass="nav-item-active">
            <a href="#reviews">Reviews</a>
          </p>
          <p className="nav-item" activeClass="nav-item-active">
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className={hamburgerMenuClass.join(" ")} onClick={click}>
        
            <div className="menu-line"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
