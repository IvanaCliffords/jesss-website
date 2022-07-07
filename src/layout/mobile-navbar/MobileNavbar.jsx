import React from "react";
import "./mobile-navbar.css"


function MobileNavbar({ show, click }) {
  const mobileNavbarClass = ["mobile-navbar"];
  if (show) {
    mobileNavbarClass.push("show");
  }

  return (
    <div className={mobileNavbarClass.join(" ")} onClick={click}>
      <nav className="mobile-navbar-div">
   

      <p className="mobile-nav-item" activeClass="mobile-nav-item-active" onClick={click}>
            <a href="#home">Home</a>
          </p>
          <p className="mobile-nav-item" activeClass="mobile-nav-item-active" onClick={click}>
            <a href="#about">About</a>
          </p>
          <p className="mobile-nav-item" activeClass="mobile-nav-item-active" onClick={click}>
            <a href="#services">Services</a>
          </p>
          <p className="mobile-nav-item" activeClass="mobile-nav-item-active" onClick={click}>
            <a href="#reviews">Reviews</a>
          </p>
          <p className="mobile-nav-item" activeClass="mobile-nav-item-active" onClick={click}>
            <a href="#contact">Contact</a>
          </p>
      </nav>
    </div>
  );
}

export default MobileNavbar;
