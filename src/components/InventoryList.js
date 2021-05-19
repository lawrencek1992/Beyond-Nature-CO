import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const InventoryList = () => {
    return (
        <Container className="inventory-list-container text-center" fluid>
            <h1 className="title pt-5 mt-5 mb-3">
                Current Inventory
            </h1>
            <Row>
                <Col s={5}>
                   <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                   </Card> 
                </Col>
                <Col s={5}>
                   <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                   </Card> 
                </Col>
                <Col s={5}>
                   <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                   </Card> 
                </Col>
                <Col s={5}>
                   <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                   </Card> 
                </Col>
                <Col s={5}>
                   <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                   </Card> 
                </Col>
            </Row>
        </Container>
    )
};

export default InventoryList;