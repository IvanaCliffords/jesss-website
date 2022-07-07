import React from "react";
import "./home.css";
import heroimg from "../../assets/hero-img.png";

import { ImStarFull } from "react-icons/im";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Jessica <br /> Cliffords
        </h1>
        <p className="hero-subtitle">
          - Number one person to take care of is - yourself
        </p>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum iste
          odio autem consequatur nulla eos.{" "}
        </p>

        <div className="hero-cta">
          <button className="hero-cta-btn">
            <a href="#contact">Let's talk</a>
          </button>
          <div className="hero-cta-reviews">
            <div>
              <ImStarFull className="hero-reviews-star" />
              <ImStarFull className="hero-reviews-star" />
              <ImStarFull className="hero-reviews-star" />
              <ImStarFull className="hero-reviews-star" />
              <ImStarFull className="hero-reviews-star" />
            </div>
            <p>
              <a href="#reviews">See my reviews</a>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-img">
        {" "}
        <svg className="hero-img-blob" viewBox="0 0 200 1000" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F1F5F5"
            d="M42,-55.9C49.6,-43.8,47.5,-25.9,52.7,-7.6C57.9,10.7,70.5,29.3,67.8,43.9C65.1,58.5,47,68.9,30.1,69.1C13.2,69.4,-2.4,59.4,-19.7,53.4C-36.9,47.4,-55.8,45.3,-59.6,35.8C-63.4,26.4,-52.2,9.6,-48.9,-8.6C-45.6,-26.7,-50.4,-46.3,-43.6,-58.5C-36.8,-70.7,-18.4,-75.6,-0.6,-74.9C17.2,-74.2,34.5,-68,42,-55.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
