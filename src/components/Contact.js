import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <Container className="contact-container text-center" fluid>
            <h1 className="mb-4 mt-5" id="contact-header">Contact</h1>
            <p className="mb-5 mt-3">Please reach out if you'd like to purchase one of my pieces!</p>
            <Row className="pb-5">
                <Col xs={12} className="mb-2">
                    <b>Email: </b>
                    beyondnatureco@gmail.com
                </Col>
                <Col xs={12}>
                    <b>Phone: </b>
                    (231) 690-1165
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 1, offset: 5}}>
                    <a target="_blank" href="https://www.instagram.com/beyondnatureco/" className="link-info" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </a>
                </Col>
                <Col xs={1}>
                    <a target="_blank" href="https://www.facebook.com/BeyondNatureCO/" className="link-info" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;