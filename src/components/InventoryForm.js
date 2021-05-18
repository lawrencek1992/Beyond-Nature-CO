import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageUpload from './ImageUpload.js'

const InventoryForm = () => {
    let defaultImage;
    const [image, setImage] = useState(defaultImage);

    return (
        <Container className="inventory-form-container pt-5 mt-5" fluid>
            <h1 className="text-center title mb-4 mt-3">Add Inventory</h1>
            <Form className="inventory-form p-4 mb-5">
                <Form.Group controlId="caption">
                    <Form.Label className="form-label">Caption</Form.Label>
                    <Form.Control type="textarea" placeholder="Item description"/>
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label className="form-label">Price</Form.Label>
                    <Form.Control type="number" placeholder="ex: 199.99" />
                </Form.Group>
                <Form.Group controlId="photoUpload">
                    {/* <Form.File id="image" label="Image upload" className="form-label" /> */}
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
                    <Button className="btn upload-button mb-0 mt-2 mr-3" type="submit">Upload</Button>
                    <Link className="btn btn-secondary mb-0 mt-2" type="cancel" to="/">Cancel</Link>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default InventoryForm;