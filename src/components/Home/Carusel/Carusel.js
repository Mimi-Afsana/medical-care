import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/pic1 (1).png";
import img2 from "../../../images/pic2.jpg";
import img3 from "../../../images/pic3.jpg";

const Carusel = () => {
  return (
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height="600px"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height="600px"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusel;
