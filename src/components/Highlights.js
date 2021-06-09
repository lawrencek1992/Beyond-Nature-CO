import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../firebase";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const Highlights = () => {
    const [photos, setPhotos] = useState([]);
    const [lastPhoto, setLastPhoto] = useState([]);

    const firestore = firebase.firestore();
    
    const photosFirstBatch = async () => {
        const response = firestore
            .collection("highlights-photos")
            .orderBy("index", "asc")
            .limit(16);
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

    const endOfPage = (currentIndex) => {
        if (lastPhoto < 85) {
            return (
                <Spinner animation="border" variant="info" className="spinner" />
            )
        } else {
            return (
                <div className="highlights-message">
                        <p>
                            Check out our current inventory <Link to="/inventory" className="highlights-link">here!</Link>
                        </p>
                    </div>
            )
        }
    }

    useEffect(() => {
        photosFirstBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", fetchMorePhotos);
        return () => {
            window.removeEventListener("scroll", fetchMorePhotos);
        }
    })

    return (
        <Container className="highlights-container text-center mt-5 pt-4 pl-0 pr-0" fluid>
            <h1 className="highlights-title pt-3 pb-1 mb-3">
                Highlights
            </h1>
            <Container className="row pr-0 photos" fluid>
                {
                    photos && photos.map(photo => {
                        return (
                            <Image className="col-md-3 col-sm-4 col-6 mb-3 rounded highlights-photo" key={photo.index} src={photo.url} alt={photo.alt} fluid />
                        )
                    })
                }
            </Container>
            <Container className="end-of-page">
                {endOfPage(lastPhoto)}
            </Container>
        </Container>

    )
}

export default Highlights;