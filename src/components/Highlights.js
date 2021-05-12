import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Still using this?
// import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import firebase from "../firebase";

const db = firebase.firestore();

function Highlights() {
    const [photos, setPhotos] = useState([]);
    const [lastPhoto, setLastPhoto] = useState([]);
    const [photosLoading, setPhotosLoading] = useState(true);
    
    const photosFirstBatch = async () => {
        setPhotosLoading(true);
        const response = db
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
        setPhotosLoading(false);
        setLastPhoto(lastPhoto.index);
    };

    const photosNextBatch = async (lastIndex) => {
        if (lastIndex <= 85) {
            setPhotosLoading(true);
            const response = db
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
            setPhotosLoading(false);
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
        <Container className="mt-5 pt-4 highlights-container" fluid>
            <h1 className="text-center pb-3 highlights-title">
                Highlights
            </h1>
            <Container className="row" fluid>
            {
                photos && photos.map(photo => {
                    return (
                        <Image className="col-3 mb-4" key={photo.index} src={photo.url} alt={photo.alt} fluid />
                    )
                })
            }
            </Container>
            {/* Loading icon */}
            {lastPhoto < 85
            ? (<div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>)
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