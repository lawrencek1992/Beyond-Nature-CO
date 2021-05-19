import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../photos/carousel-photos/Logo.png';
import flowerAndLeafBirdbath from '../photos/carousel-photos/flower-and-leaf-birdbath.png';
import blueFlowerBirdbath from '../photos/carousel-photos/blue-flower-birdbath.png';
import birdOnLeaf from '../photos/carousel-photos/bird-on-leaf.png';

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
              src={birdOnLeaf}
              alt="A birdbath made of green porcelain leaves"
            />
          </Carousel.Item>
        </Carousel>
    )
}

export default PhotoCarousel;