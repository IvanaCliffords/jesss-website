import React from "react";
import "./reviews.css";

import { RiDoubleQuotesL } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./testimonialsData";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 3500,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        fade: true,
        nextArrow: false,
        prevArrow: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="reviews" className="reviews">
      <Slider {...settings} className="testimonials">
        {data.map((card, index) => {
          return (
            <div className="wrapper" key={index}>
              <div className="fix">
                <RiDoubleQuotesL className="test-image" />

                <h4 className="test-text">{card.text}</h4>
                <p className="test-name">{card.person}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Reviews;
