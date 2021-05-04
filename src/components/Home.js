import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import PhotoCarousel from '../components/PhotoCarousel.js';

const Home = () => {
    return (
        <Container className="home-container" fluid >
            <PhotoCarousel />
            <h1 className="title">Beyond Nature CO</h1>
            <div className="home-description">
                <p>
                    Beyond Nature CO is a small business based out of Erie, CO that makes handmade birdbaths, feeders and garden art from upcycled local materials. Every piece is one of a kind. We pride ourselves on creating sustainable and eco-friendly art. We are proudly a female-owned small business and love supporting other artists in our community. 
                </p>
                <p>
                    Check out the highlights section of our site to see some of our best work, and please visit our Instagram or Facebook pages to view the pieces we currently have in stock!
                </p>
                <Image className="family-photo" src="https://i.ibb.co/TkmL8F5/family.png" alt="Kayla and her husband stand with their two children in front of a lake." fluid />
            </div>
        </Container>
    )
};

export default Home;