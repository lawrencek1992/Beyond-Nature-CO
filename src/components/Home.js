import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <Image className="main-image" src="https://i.ibb.co/njyy1r3/blue-bowl.png" alt="Bowl of water on a fence post in a field." />
                </Row>
                <Row>
                    <p>This is the home page!</p>
                </Row>
            </Col>
        </Container>
    )
}

export default Home;