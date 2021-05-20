import React, { useState, useEffect } from 'react';

import firebase from '../firebase.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const InventoryList = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    // const [lastItem, setLastItem] = useState([]);

    const firestore = firebase.firestore();

    const getInventoryItems = async () => {
        const response = firestore
            .collection("inventory-items")
            .orderBy("dateAdded", "asc");
            // if you are worried about there being too many items, you can add the following lines, and then also add a getInventoryItemsNextBatch function like the one you have in Highlights.js:
            // limit(8); <<--Can be another number. 
        const data = await response.get();
        const inventoryItems = [];
        // You would also need to save lastItem in state.
        // let lastItem = "";
        data.docs.forEach((doc) => {
            inventoryItems.push(doc.data());
            // lastItem = doc.data();
        });
        setInventoryItems(inventoryItems);
        // setLastItem(lastItem.index); 
        // Um... is that going to work above? Cause you weren't saving indexes for these documents. I guess you could?

    };

    useEffect(() => {
        getInventoryItems();
    });

    return (
        <Container className="inventory-list-container text-center pl-4 pr-4" fluid>
            <h1 className="title pt-5 mt-5 mb-3">
                Current Inventory
            </h1>
            <Row>
                {inventoryItems && inventoryItems.map(item => {
                    return (
                        <Container className="col-md-3 col-sm-4 mb-3">
                            <Card className="inventory-card mb-3">
                            <Card.Img 
                                variant="top" 
                                src={item.imgURL} 
                                alt={item.description} 
                                key={item.dateAdded}
                                className="card-img"
                                // fluid
                            />
                            <Card.Body>
                                <Card.Title className="description">
                                    {item.description}
                                </Card.Title>
                                <Card.Text className="price">
                                    ${item.price}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Container>
                    )
                })

                }

                {/* <Container className="col-md-3 col-sm-4 mb-3">
                    <Card className="inventory-card mb-3">
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/beyond-nature-co-95ab7.appspot.com/o/highlights-photos%2Fphoto-0.jpg?alt=media&token=3be4a11a-952b-4cb6-9e78-7ba12cb9d7c3" className="card-image" fluid />
                        <Card.Body>
                            <Card.Title className="description">
                                Item Description
                            </Card.Title>
                            <Card.Text className="price">
                                $100
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container> */}
                
            </Row>
        </Container>
    )
};

export default InventoryList;