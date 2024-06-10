import React from "react";
import { Carousel } from "react-bootstrap";
import imgVinyl from "../assets/travis-yewell-F-B7kWlkxDQ-unsplash.jpg";
import imgCamera from "../assets/nicola-perantoni-irUQaBK3ydI-unsplash.jpg";
import imgTele from "../assets/annie-spratt-goholCAVTRs-unsplash.jpg";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img src={imgVinyl} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgCamera} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgTele} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
