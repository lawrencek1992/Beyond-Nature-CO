import React, { useState, useEffect } from 'react';

import firebase from '../firebase.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const InventoryList = ({ message, setFlashMessage }) => {
    const [inventoryItems, setInventoryItems] = useState([]);
    // const [lastItem, setLastItem] = useState([]);

    const firestore = firebase.firestore();
    const storage = firebase.storage().ref();

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

    const handleDelete = (imageName) => {
        if (window.confirm("Delete this post?") === true) {
          // Remove photo document from firestore
            let docRef = firestore.collection("inventory-items").doc(imageName);
            docRef
                .delete()
                .then((res) => {
                    console.log(imageName, " is now ", res, " in firestore.");
                    return null;
                })
                .catch((e) => {
                    console.error("Error: ", e);
                    return e;
                });
            // Remove photo file from cloud storage
            let storageFileRef = storage.child(imageName);
            storageFileRef
                .delete()
                .then((res) => {
                    console.log(imageName, " is now ", res, " in cloud storage.");
                })
                .catch((e) => {
                    console.error("Error: ", e);
                });
            setFlashMessage(`deleted`);
        }
    
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
                            <Card.Body className="card-body text-center">
                                <Card.Title className="description">
                                    {item.description}
                                </Card.Title>
                                <Card.Text className="price pb-2 mb-0">
                                    ${item.price}
                                </Card.Text>
                                {/* <button 
                                    className="inventory-icon text-center pt-2 mr-1"
                                    // onClick={someEditFunction}
                                >
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </button> */}
                                <button 
                                    className="inventory-icon text-center ml-1"
                                    onClick={() => handleDelete(item.name)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </Card.Body>
                            </Card>
                        </Container>
                    )
                })
                }
            </Row>
        </Container>
    )
};

export default InventoryList;