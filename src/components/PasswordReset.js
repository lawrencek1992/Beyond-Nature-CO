import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../firebase';

const PasswordReset = ({ showPasswordReset, setShowPasswordReset, setShowResetSuccess }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState(null);

    const history = useHistory();

    const emailInput = useRef(null);

    const handleClose = () => {
        setShowPasswordReset(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = firebase.auth();
        // Firebase function to send password reset email:
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setShowPasswordReset(false);
                setShowResetSuccess(true);
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    let errorMessage = "Email address not found!"
                    setErrorMessage(errorMessage);
                    setShowTooltip(true);
                    setTimeout(() => {
                        setShowTooltip(false)
                    }, 3000);
                } else if (error.code === "auth/invalid-email") {
                    let errorMessage = "Invalid email format."
                    setErrorMessage(errorMessage);
                    setShowTooltip(true);
                    setTimeout(() => {
                        setShowTooltip(false);
                    }, 3000);
                } else {
                    console.log("Code: " + error.code);
                    console.log(error.message);
                }
            });
        
    }

    return (
        <Modal 
            show={showPasswordReset} 
            onHide={handleClose}
        >
            <Modal.Header id="custom-modal" closeButton>
                <Modal.Title>
                    Send Password Reset Email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="custom-modal">
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Form.Control
                            type="text"
                            ref={emailInput}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Overlay target={emailInput.current} show={showTooltip} placement="above">
                        {(props) => (
                            <Tooltip {...props}>
                                {errorMessage}
                            </Tooltip>
                        )}
                    </Overlay>
                </Form>
            </Modal.Body>
            <Modal.Footer id="custom-modal">
                <Button
                    className="btn btn-info"
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                    disabled={!email}
                >
                    Submit
                </Button>
                <Button 
                className="btn btn-secondary mr-3" 
                onClick={() => {
                    setShowPasswordReset(false);
                }}
            >
                Cancel
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PasswordReset