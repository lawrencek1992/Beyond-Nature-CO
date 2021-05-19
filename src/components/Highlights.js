import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../firebase";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const firestore = firebase.firestore();

function Highlights() {
    const [photos, setPhotos] = useState([]);
    const [lastPhoto, setLastPhoto] = useState([]);
    
    const photosFirstBatch = async () => {
        const response = firestore
            .collection("highlights-photos")
            .orderBy("index", "asc")
            .limit(8);
        const data = await response.get();
        const photos = [];
        let lastPhoto = "";
        data.docs.forEach((doc) => {
            photos.push(doc.data());
            lastPhoto = doc.data(); 
        });
        setPhotos(photos);
        setLastPhoto(lastPhoto.index);
    };

    const photosNextBatch = async (lastIndex) => {
        if (lastIndex <= 85) {
            const response = firestore
                .collection("highlights-photos")
                .orderBy("index", "asc")
                .startAfter(lastIndex)
                .limit(8);
            const data = await response.get();
            const morePhotos = [...photos];
            let lastPhoto = "";
            data.docs.forEach((doc) => {
                morePhotos.push(doc.data());
                lastPhoto = doc.data();
            });
            setPhotos(morePhotos);
            setLastPhoto(lastPhoto.index);
            return { morePhotos, lastPhoto };
        } 
    };

    const fetchMorePhotos = (currentIndex) => {
        // When you scroll to the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            photosNextBatch(lastPhoto);
        };
    }

    useEffect(() => {
        photosFirstBatch();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", fetchMorePhotos);
        return () => {
            window.removeEventListener("scroll", fetchMorePhotos);
        }
    })

    return (
        <Container className="mt-5 pt-4 pl-0 pr-0 highlights-container text-center" fluid>
            <h1 className="text-center mt-0 mb-3  pt-3 pb-1 highlights-title">
                Highlights
            </h1>
            <Container className="row text-center ml-1" fluid>
            {
                photos && photos.map(photo => {
                    return (
                        <Image className="col-3 mb-4 rounded" key={photo.index} src={photo.url} alt={photo.alt} fluid />
                    )
                })
            }
            </Container>
            {lastPhoto < 85
            ? <Spinner animation="border" variant="info" className="text-center spinner"/>
            : (<div className="text-center pb-3 highlights-message">
                <p>
                    Contact us <Link to="/contact" className="highlights-link">here</Link> to inquire about our current inventory! 
                </p>
            </div>)
            }
        </Container>
    )
}

export default Highlights;