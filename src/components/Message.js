import React from 'react';
 
const Message = ({ type }) => {

    const messages = {
        logout: "You have been logged out!",
        deleted: "Your inventory item has been deleted!",
        saved: "New item added to inventory!",
    };
    return (
        <div className={`App-message ${type}`}>
            <p className="container">
                {messages[type]}
            </p>
        </div>
    );
};

export default Message;