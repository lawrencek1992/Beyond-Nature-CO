import React from 'react';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <Container className="contact-container" fluid>
            <h1>Contact Section</h1>
            <p>Look, a contact page!</p>


            {/* Open this in a new tab instead! */}
            <a href="https://www.instagram.com/beyondnatureco/" className="link-info">
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            
             {/* Open this in a new tab instead! */}
            <a href="https://www.facebook.com/BeyondNatureCO/" className="link-info">
                <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <p>Email Address Here!</p>
            <p>Phone Number Here?</p>
            <p>What about an address or a map?</p>
        </Container>
    )
}

export default Contact;