import React, { useState, useEffect } from 'react';
// Still using this?
// import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import firebase from "../firebase";

const db = firebase.firestore();

function Highlights() {
    const [photos, setPhotos] = useState([]);
    const [lastPhoto, setLastPhoto] = useState([]);
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
    };

    const fetchMorePhotos = (currentIndex) => {
        setPhotosLoading(true);
        photosNextBatch(currentIndex)
            .then((res) => {
                setLastPhoto(res.lastPhoto.index);
                setPhotos(photos.concat(res.morePhotos));
                setPhotosLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setPhotosLoading(false);
            })
    }

    useEffect(() => {
        photosFirstBatch();
    }, []);

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
            <div className="text-center">
                {/* {photosLoading 
                    ? (<p>Loading..</p>) 
                    : lastPhoto.length > 0 
                        ? ( */}
                            
                            <button onClick={() => photosNextBatch(lastPhoto)}>More Photos</button>
                        
                        {/* )  */}
                    {/* : (<span>You are up to date!</span>)
                } */}
            </div>
        </Container>
    )
}
// const Highlights = () => {
//     const [photos, setPhotos] = useState([]);
//     const [lastKey, setLastKey] = useState('');
//     const [nextPhotos_loading, setNextPhotosLoading] = useState(false);

//     const db = firebase.firestore();

//     const photosFirstBatch = async () => {
//         try {
//             const data = await db
//                 .collection('highlights-photos')
//                 .orderBy('createdAt', 'desc')
//                 .limit(5)
//                 .get();
            
//             let photos = [];
//             let lastKey = '';
//             data.docs.forEach((doc) => {
//                 photos.push({
//                     photoURL: doc.data().url,
//                 })
//                 lastKey = doc.data().createdAt;
//             });
//             return { photos, lastKey };
//         } catch (error) {
//             console.log(error);
//         }
//     };

//    const photosNextBatch = async (key) => {
//        try {
//            const data = await db
//                 .collection('highlights-photos')
//                 .orderedBy('createdAt', 'desc')
//                 .startAfter(key)
//                 .limit(5)
//                 .get();

//             let photos = [];
//             let lastKey = '';
//             data.forEach((doc) => {
//                 photos.push({
//                     photoURL: doc.data().url,
//                 })
//                 lastKey = doc.data().createdAt;
//             });
//             return { photos, lastKey };
//        } catch (error) {
//            console.log(error);
//        }
//    };

//    useEffect(()=> {
//        photosFirstBatch()
//         .then((res) => {
//             setPhotos(res.photos);
//             setLastKey(res.lastKey);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     });

//    const fetchMorePhotos = (key) => {
//        if (key.length > 0) {
//            setNextPhotosLoading(true);
//            photosNextBatch(key)
//             .then((res) => {
//                 setLastKey(res.lastKey);
//                 // add new photos to old photos
//                 setPhotos(photos.concat(res.photos));
//                 setNextPhotosLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setNextPhotosLoading(false);
//             });
//        }
//    };

//    const allPhotos = (
//        <div>
//            {photos.map((photo) => {
//                return (
//                    <Image src={photos.photoURL} alt="Photo of garden decor made by Beyond Nature CO" />
//                );
//            })}
//        </div>
//    );

//     return (
//         <Container className="highlights-container mt-5 pt-3" fluid>
//             <h1 id="highlights-title">Highlights</h1>
//             <div>{allPhotos}</div>
//             <div>
//                 {nextPhotos_loading ? (
//                     <p>Loading..</p>
//                 ) : lastKey.length > 0 ? (
//                     <button onClick={() => fetchMorePhotos(lastKey)}>More Photos</button>
//                 ) : (
//                     <span>No more photos!</span>
//                 )}
//             </div>
//         </Container>
//     );
// }

export default Highlights;