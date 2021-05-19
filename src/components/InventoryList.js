import React from 'react';

import Container from 'react-bootstrap/Container';

const InventoryList = () => {
    return (
        <Container classname="mt-5 pt-5 inventory-list-container">
            <h1 className="title text-center pt-5 mt-5">
                Current Inventory
            </h1>
            <p className="text-center">
                This is where you can put your current inventory items!
            </p>
        </Container>
    )
};

export default InventoryList;