import React, { useState, useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Overlay, Tooltip } from 'react-bootstrap';

import firebase from '../firebase';
import UserContext from '../context/UserContext';
import PasswordReset from './PasswordReset';
import ResetSuccess from './ResetSuccess';

const Login = ({message, setFlashMessage, errorMessage, showEmailTooltip, showPasswordTooltip }) => {
    const { onLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [showResetSuccess, setShowResetSuccess] = useState(false);

    const history = useHistory();

    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

    const resetPassword = () => {
        setShowPasswordReset(true);
    }

    return (
        <Form 
            className="login-container mt-5 pt-5 ml-5 pl-5" 
            name="login" 
            onSubmit={handleLogin}
        >
            <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <br />
                <Form.Control 
                    required
                    ref={emailInput}
                    type="email" 
                    className="email-input" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </Form.Group>
            <Overlay 
                target={emailInput.current}
                show={showEmailTooltip} 
                placement="top">
                {(props) => (
                    <Tooltip {...props}>
                        {errorMessage}
                    </Tooltip>
                )}
            </Overlay>
            <Form.Group>
                <Form.Label htmlFor="password">Password:</Form.Label>
                <br />
                <Form.Control 
                    required
                    ref={passwordInput}
                    type="password" 
                    className="password-input" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </Form.Group>
            <Overlay 
                target={passwordInput.current}
                show={showPasswordTooltip} 
                placement="top">
                {(props) => (
                    <Tooltip {...props}>
                        {errorMessage}
                    </Tooltip>
                )}
            </Overlay>
            <Button 
                className="btn btn-info mr-3" 
                type="submit" 
                disabled={!email || !password}
            >
                Login
            </Button>
            <Link 
                className="btn btn-secondary mr-3" 
                type="cancel" 
                to="/"
            >
                Cancel
            </Link>
            <Button 
                className="btn btn-warning"
                onClick={() => resetPassword()}
            >
                Reset Password
            </Button>
            <PasswordReset 
                showPasswordReset={showPasswordReset}
                setShowPasswordReset={setShowPasswordReset}
                setShowResetSuccess={setShowResetSuccess}
            />
            <ResetSuccess showResetSuccess={showResetSuccess} setShowResetSuccess={setShowResetSuccess} />
        </Form>
    )
};

export default Login;