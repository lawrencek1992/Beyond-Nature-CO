import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div>
            <p>Look, a contact page!</p>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookSquare} />
            <p>Email Address Here!</p>
            <p>Phone Number Here?</p>
            <p>What about an address or a map?</p>
        </div>
    )
}

export default Contact;