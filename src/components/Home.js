import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container fluid className="home-container" bg="dark">
            <Image className="main-image" src="https://i.ibb.co/njyy1r3/blue-bowl.png" alt="Bowl of water on a fence post in a field." fluid />
            <h1 className="title">Beyond Nature CO</h1>
            <p className="home-description">
                My name is Kayla Eggemeyer, and I create gorgeos art pieces for patios, flower gardens, or even indoors! All of my designs are created from upcycled local Colorado materials. 
                <br /> <br />
                Check out the highlights section of my site to see some of my best work, and please visit my Instagram or Facebook pages to view the pieces I currently have in stock!
            </p>
        </Container>
    )
}

export default Home;