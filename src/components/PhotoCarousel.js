import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../photos/Logo.png';

// First round of potenttial
import hangingPorcelainFeeders from '../photos/hanging-porcelain-feeders.png';
import greenBirdbath from '../photos/green-birdbath.png';
import greenLeaf from '../photos/green-leaf.png';

// Try two with photos:
import hangingGlassFeeders from '../photos/hanging-glass-feeders.png';
import owlBirdbath from '../photos/owl-birdbath.png';
import greenCrystalBirdbath from '../photos/green-cystal-birdbath.png';

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
          <Carousel.Item className="carousel-item" interval={3000}>
            <img 
              className="d-block w-100 main-image"
              src={greenBirdbath}
              alt="Three porcelain bird feeders hang from a fence"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={3000}>
            <img 
              className="d-block w-100 main-image"
              src={hangingGlassFeeders}
              alt="A porcelain leaf-shaped birdbath sits in a black basin"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={3000}>
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