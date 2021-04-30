import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container fluid className="home-container" bg="dark">
            <Image className="main-image" src="https://i.ibb.co/njyy1r3/blue-bowl.png" alt="Bowl of water on a fence post in a field." fluid />
            <p>This is the home page!</p>
        </Container>
    )
}

export default Home;