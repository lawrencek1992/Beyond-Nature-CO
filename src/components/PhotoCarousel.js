import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import blueBowl from '../photos/blue-bowl.png';
import hangingFeeder from '../photos/hanging-feeder.png';
import flowersAndBirdseed from '../photos/flowers-and-birdseed.png';
import crystalBirdBath from '../photos/crystal-birdbath.png';

const PhotoCarousel = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 main-image"
      src={blueBowl}
      alt="Blue bowl with water hanging on a fence in a meadow"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 main-image"
      src={hangingFeeder}
      alt="A bird feeder hangs from a tree"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 main-image"
      src={flowersAndBirdseed}
      alt="A bird feeder hangs on a fence next to pink flowers"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 main-image"
      src={crystalBirdBath}
      alt="Birdbath made of crystal sparkles in the sunlight"
    />
  </Carousel.Item>
</Carousel>
    )
}

export default PhotoCarousel;