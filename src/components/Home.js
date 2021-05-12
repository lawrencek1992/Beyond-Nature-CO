import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import PhotoCarousel from './PhotoCarousel.js';
import headshot from '../photos/headshot.png';

const Home = () => {
    return (
        <Container className="home-container pb-5 text-center" fluid >
            <PhotoCarousel />
            <Container className="about-container">
                <h1 className="about mt-5 mb-0">About</h1>
                    <Container className="home-description mt-0 pt-0 col-s-7 text-center">
                        <p>
                            Beyond Nature CO is a small business based out of Erie, CO that makes handmade birdbaths, feeders, and garden art from upcycled local materials. Every piece is one of a kind. We pride ourselves on creating sustainable and eco-friendly art. We are proudly a female-owned small business and love supporting other artists in our community. 
                        </p>
                        <p className="mb-5">
                            Check out the highlights section of our site to see some of our best work, and please visit our Instagram or Facebook pages to view the pieces we currently have in stock!
                        </p>
                    </Container>
                    <Container>
                        <Image className="headshot" src={headshot} alt="Kayle Eggemeyer, owner of Beyond Nature CO." fluid />
                    </Container>
            </Container>
        </Container>
    )
};

export default Home;