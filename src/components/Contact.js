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
            <Container className="contact-box mt-3 pt-1 pb-5 pl-0 pr-0">
                <h1 className="title mt-5">Contact</h1>
                <p className="mb-5 mt-1">
                    Please reach out if you'd like to purchase one of our pieces!
                    <br/>
                    You can see the pieces we currently have avaliable on our Instagram and Facebook pages. 
                </p>
                <Row className="pb-5">
                    <Col xs={12} className="mb-2">
                        <b>Email: </b>
                        beyondnatureco@gmail.com
                    </Col>
                    <Col xs={12} >
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
                        <a target="_blank" href="https://www.facebook.com/BeyondNatureCO/" className="link-info m-3" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact;