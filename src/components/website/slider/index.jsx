import React, { PureComponent } from 'react';
import { Carousel } from 'react-bootstrap';

import Image1 from '*static/img/slider/first-slider.svg';
import Image2 from '*static/img/slider/second-slider.svg';
import Image3 from '*static/img/slider/third-slider.svg';

import './style.css';

console.log('XXXXX:', Image1);


class Slider extends PureComponent {
  render() {
    return (
      <div className="slider-container">
        <Carousel interval="5000" className="custom-slider">
          <Carousel.Item>
            <img
              className="img-fluid d-block w-100"
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
