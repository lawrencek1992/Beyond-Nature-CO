import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hangingPorcelainFeeders from '../photos/hanging-porcelain-feeders.png';
import logo from '../photos/Logo.png';
import greenBirdbath from '../photos/green-birdbath.png';
import greenLeaf from '../photos/green-leaf.png';

const PhotoCarousel = () => {
    return (
        <Carousel class="carousel">
          <Carousel.Item class="carousel-item">
            <img
              className="d-block w-100 main-image"
              src={logo}
              alt="Beyond Nature CO logo"
            />
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img 
              className="d-block w-100 main-image"
              src={hangingPorcelainFeeders}
              alt="Three porcelain bird feeders hang from a fence"
            />
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img 
              className="d-block w-100 main-image"
              src={greenLeaf}
              alt="A porcelain leaf-shaped birdbath sits in a black basin"
            />
          </Carousel.Item>
          <Carousel.Item class="carousel-item">
            <img
              className="d-block w-100 main-image"
              src={greenBirdbath}
              alt="A birdbath made of green porcelain leaves"
            />
          </Carousel.Item>
        </Carousel>
    )
}

export default PhotoCarousel;