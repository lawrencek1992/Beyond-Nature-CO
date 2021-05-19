import React from 'react';

import Container from 'react-bootstrap/Container';

const InventoryList = () => {
    return (
        <Container>
            <h1 className="title">
                Current Inventory
            </h1>
            <p>
                This is where you can put your current inventory items!
            </p>
        </Container>
    )
};

export default InventoryList;