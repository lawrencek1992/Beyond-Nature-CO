import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../firebase.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageUpload from './ImageUpload.js'

const InventoryForm = () => {
    let defaultImage;
    const [image, setImage] = useState(defaultImage);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const firestore = firebase.firestore();

    const  handleSubmit = () => {
        let docRef = firestore.collection("inventory-items").doc(image);
        docRef.set({
            description: description,
            price: price
        },  { merge: true });

    };

    return (
        <Container className="inventory-form-container pt-5 mt-5" fluid>
            <h1 className="text-center title mb-4 mt-3">Add Inventory</h1>
            <Form className="inventory-form p-4 mb-5" onSubmit={handleSubmit}>
                <Form.Group controlId="description">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="textarea" placeholder="Item description" onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label className="form-label">Price</Form.Label>
                    <Form.Control type="number" placeholder="ex: 199" onChange={(event) => setPrice(event.target.value)}/>
                </Form.Group>
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
                <Form.Group controlId="formButtons">
                    <Button className="btn upload-button mb-0 mt-2 mr-3" type="submit">Save</Button>

                    {/* You need to add a function to delete the photo and the document about the photo in storage and firestore, otherwise they will just stay there and take up space (which is limited) */}
                    <Link className="btn btn-secondary mb-0 mt-2" type="cancel" to="/">Cancel</Link>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default InventoryForm;