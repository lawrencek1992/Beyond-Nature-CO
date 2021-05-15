import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const InventoryForm = () => {
    return (
        <Container className="inventory-form-container pt-5 mt-5" fluid>
            <h1>Manage inventory</h1>
            <Form className="inventory-form">
                <Form.Group controlId="photoUpload">
                <Form.File id="image" label="Image upload" />
                </Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control type="textarea"/>
            </Form>
        </Container>
    )
};

export default InventoryForm;