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
    // Probably getting rid of this also....
    const [photosLoading, setPhotosLoading] = useState(false);
    
    const photosFirstBatch = async () => {
        const response = db
            .collection("highlights-photos")
            .orderBy("index", "asc")
            .limit(3);
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
        // You will have to change this to a higher number once you upload all of the photos to firestore! Don't forget!!!!
        if (lastIndex < 65) {
            const response = db
                .collection("highlights-photos")
                .orderBy("index", "asc")
                .startAfter(lastIndex)
                .limit(3);
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
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("You're at the bottom of the page!");
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
        <Container className="mt-5 pt-4" fluid>
            <h1 className="text-center pb-3">
                Highlights
            </h1>
            <Container className="row" fluid>
            {
                photos && photos.map(photo => {
                    return (
                        <Image className="col-4 mb-4" key={photo.index} src={photo.url} alt={photo.alt} fluid />
                    )
                })
            }
            </Container>
            { lastPhoto === 64 && 
            <div className="text-center">
                <p>
                    Contact me <Link to="/contact" className="highlights-link">here</Link> to inquire about our current inventory! 
                </p>
            </div>}
        </Container>
    )
}

export default Highlights;