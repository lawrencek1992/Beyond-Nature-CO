import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InventoryForm = () => {
    

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
                    <Button className="btn upload-button mb-0 mt-2" type="submit">Upload</Button>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default InventoryForm;