import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../photos/Logo.png';

import flowerAndLeafBirdbath from '../photos/flower-and-leaf-birdbath.png';
import blueFlowerBirdbath from '../photos/blue-flower-birdbath.png';
import owlBirdbath from '../photos/owl-birdbath.png';

const PhotoCarousel = () => {
    return (
        <Carousel className="carousel" fade>
          <Carousel.Item className="carousel-item" interval={1500}>
            <img
              className="d-block w-100 main-image"
              src={logo}
              alt="Beyond Nature CO logo"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={2500}>
            <img 
              className="d-block w-100 main-image"
              src={flowerAndLeafBirdbath}
              alt="Three porcelain bird feeders hang from a fence"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={2500}>
            <img 
              className="d-block w-100 main-image"
              src={blueFlowerBirdbath}
              alt="A porcelain leaf-shaped birdbath sits in a black basin"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={2500}>
            <img
              className="d-block w-100 main-image"
              src={owlBirdbath}
              alt="A birdbath made of green porcelain leaves"
            />
          </Carousel.Item>
        </Carousel>
    )
}

export default PhotoCarousel;