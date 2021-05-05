import React from 'react';
import Container from 'react-bootstrap/Container';

// photo imports here

const Highlights = () => {
    return (
        // All the 'is-' and 'has-' classes are Bulma CSS classes, and you will probably take them out and replace them with Bootstrap classes. 
        <Container className="highlights mt-5 hero is-fullheight is-bold is-info" fluid>
            <div className="hero-body">
                <div className="container">
                    <div className="header content">
                        <h2 className="subtitle is-6">
                            Code Challenge #16
                        </h2>
                        <h1 className="title is-1">
                            Infinite Scroll Unsplash Code Challenge
                        </h1>
                    </div>
                    {/* IMAGES GO HERE! */}
                </div>
            </div>
        </Container>
    );
}

export default Highlights;