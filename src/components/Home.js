import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import PhotoCarousel from './PhotoCarousel.js';
import headshot from '../photos/headshot.png';

const Home = () => {
    return (
        <Container className="home-container text-center p-0" fluid>
            <PhotoCarousel />
            <Container className="about-container">
                <h1 className="title pt-5 pb-2 mt-5" >
                    About
                </h1>
                <Container className="home-description mt-0 pt-0">
                    <p>
                        Beyond Nature CO is a small business based out of Erie, CO that makes handmade birdbaths, feeders, and garden art from upcycled local materials. Every piece is one of a kind. We pride ourselves on creating sustainable and eco-friendly art. We are proudly a female-owned small business and love supporting other artists in our community.
                    </p>
                    <p>
                        Please visit our Inventory page to see the items we currently have in stock, and reach out if you would like to make a purchase! 
                    </p>
                    <Image className="headshot" src={headshot} alt="Kayle Eggemeyer, owner of Beyond Nature CO." fluid />
                    <p className="caption mb-5 pb-4">
                        Kayla Eggemeyer, owner of Beyond Nature CO.
                    </p>
                </Container>
            </Container>
        </Container>


        // <Container className="home-container text-center p-0" fluid>
        //     <PhotoCarousel />
        //     <Container className="about-container">
        //         <h1 className="title pt-5 pb-2 mt-5">
        //             About
        //         </h1>
        //         <Container className="home-description mt-0 pt-0 text-center">
        //             <p>
        //                 Beyond Nature CO is a small business based out of Erie, CO that makes handmade birdbaths, feeders, and garden art from upcycled local materials. Every piece is one of a kind. We pride ourselves on creating sustainable and eco-friendly art. We are proudly a female-owned small business and love supporting other artists in our community. 
        //             </p>
        //             <p>
        //                 Please visit our Inventory page to see the items we currently have in stock, and reach out if you would like to make a purchase!
        //             </p>
        //         </Container>
        //         <Image className="headshot" src={headshot} alt="Kayle Eggemeyer, owner of Beyond Nature CO." fluid />
        //         <p className="caption mb-5 pb-4">
        //             Kayla Eggemeyer, owner of Beyond Nature CO.
        //         </p>
        //     </Container>
        // </Container>
    )
};

export default Home;