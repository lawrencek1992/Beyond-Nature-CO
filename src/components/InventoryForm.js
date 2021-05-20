import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from '../firebase.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import ImageUpload from './ImageUpload.js'

const InventoryForm = () => {
    let defaultImage;
    const [image, setImage] = useState(defaultImage);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    const target = useRef(null);

    const firestore = firebase.firestore();
    const storage = firebase.storage().ref().child("inventory-photos");
    const history = useHistory();

    const  handleSubmit = () => {
        let firestoreDocRef = firestore.collection("inventory-items").doc(image);
        // Add the description and price values to the firestore doc and merge them with the existing data (the url of the photo). 
        firestoreDocRef.set({
            description: description,
            price: price,
            dateAdded: Date.now(),
        },  { merge: true });
    };

    const handleCancel = (event) => {
        console.log("The current image is: ", image);
        event.preventDefault();

        // Remove photo document from firestore
        let docRef = firestore.collection("inventory-items").doc(image);
        docRef
            .delete()
            .then((res) => {
                console.log(image, " is now ", res, " in firestore.");
                return null;
              })
              .catch((e) => {
                console.error("Error: ", e);
                return e;
              });

        // Remove photo file from cloud storage
        let storageFileRef = storage.child(image);
        storageFileRef
            .delete()
            .then((res) => {
                console.log(image, " is now ", res, " in cloud storage.");
            })
            .catch((e) => {
                console.error("Error: ", e);
            });
        
        // Redirect to the home page
        history.push("/");
    }

    const handleInputChange = () => {
        if (description.length > 42) {
            setShowTooltip(true);
            setTimeout(() => {setShowTooltip(false)}, 3000);
        } else if (description.length <= 44) {
            setShowTooltip(false);
        }
    }

    useEffect(()=> {
        handleInputChange();
    });

    return (
        <Container className="inventory-form-container pt-5 mt-5" fluid>
            <h1 className="text-center title mb-4 mt-3">Add Inventory</h1>
            <Form className="inventory-form p-4 mb-5" onSubmit={handleSubmit}>
                <Form.Group controlId="photoUpload">
                    <Form.Label className="image">Image</Form.Label>
                    <ImageUpload
                        onRequestSave={id => setImage(id)}
                        onRequestClear={() => setImage(null)}
                        defaultFiles={
                            image 
                                ? [
                                    {
                                        source: image,
                                        options: {
                                            type: "local"
                                        }
                                    }
                                ]
                                : []
                            } 

                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control 
                        type="textarea" 
                        id="description"
                        placeholder="Item description"
                        maxLength="43"
                        ref={target}
                        onChange={(event) => {
                            setDescription(event.target.value);
                            handleInputChange();
                            }} />
                    <Overlay
                        target={target.current}
                        show={showTooltip}
                        placement="top"
                    >
                        <Tooltip>
                            Maximum character length reached!
                        </Tooltip>
                    </Overlay>
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label className="form-label">Price</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="ex: 199" 
                        onChange={(event) => setPrice(event.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formButtons">
                    <Button 
                    className="btn upload-button mb-0 mt-2 mr-3" type="submit">
                        Save
                    </Button>
                    <Button 
                        className="btn btn-secondary mb-0 mt-2" 
                        type="cancel" 
                        to="/" 
                        onClick={handleCancel}>
                            Cancel
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default InventoryForm;