import React from 'react';
import firebase from '../firebase.js';

import shortid from 'shortid';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { BrowserRouter as Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InventoryForm = () => {
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
    const storage = firebase.storage().ref();

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
                    <Form.Control type="number" placeholder="149.99" />
                </Form.Group>
                <Form.Group controlId="photoUpload">
                    <Form.File id="image" label="Image upload" className="form-label" />
                </Form.Group>
                <Form.Group clas>
                    <Button className="btn upload-button mb-0 mt-2 mr-3" type="submit">Upload</Button>
                    <Link className="btn btn-secondary mb-0 mt-2" type="cancel" to="/">Cancel</Link>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default InventoryForm;