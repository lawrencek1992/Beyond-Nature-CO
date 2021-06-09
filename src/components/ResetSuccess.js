import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ResetSuccess = ({ showResetSuccess, setShowResetSuccess }) => {
    const history = useHistory();

    const closeModal = () => {
        setShowResetSuccess(false);
    }

    return (
        <Modal show={showResetSuccess} onHide={closeModal}>
            <Modal.Header id="custom-modal" closeButton>
                <Modal.Title>
                    Email Sent!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="custom-modal">
                <p>
                    Check for an email from Google Firebase to reset your password! If you can't find the email, refresh your inbox and check your spam folder. 
                </p>
            </Modal.Body>
            <Modal.Footer id="custom-modal">
                <Button 
                    className="btn btn-secondary" 
                    onClick={() => {
                        closeModal();
                        history.push("/login");
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ResetSuccess;