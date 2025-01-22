import React from "react";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselView = ({ countries }) => {
  return (
    <div>
      <div className="home-title">
        <span className="top"></span>
        <h1>WELCOME</h1>
        <span className="bottom"></span>
      </div>
      <Carousel data-bs-theme="dark">
        {countries.map((country) => (
          <Carousel.Item key={country.name}>
            <img
              className="d-block carouselImage"
              src={country.flag}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{country.name}</h5>
              <p>{country.region}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselView;
