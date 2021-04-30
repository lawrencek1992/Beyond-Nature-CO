import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container className="home-container" fluid >
            <Image className="main-image" src="https://i.ibb.co/njyy1r3/blue-bowl.png" fluid />
            <h1 className="title">Beyond Nature CO</h1>
            <div className="home-description">
                <p>
                    My name is Kayla Eggemeyer, and I create gorgeos art pieces for patios, flower gardens, or even indoors! All of my designs are created from upcycled local Colorado materials.
                </p>
                <p>
                    Check out the highlights section of my site to see some of my best work, and please visit my Instagram or Facebook pages to view the pieces I currently have in stock!
                </p>
                <Image className="family-photo" src="https://i.ibb.co/TkmL8F5/family.png" alt="Kayla and her husband stand with their two children in front of a lake." fluid />
            </div>
        </Container>
    )
};

export default Home;