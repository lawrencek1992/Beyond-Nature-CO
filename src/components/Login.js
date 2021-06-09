import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import UserContext from '../context/UserContext';

const Login = ({message, setFlashMessage, errorMessage, showEmailTooltip, showPasswordTooltip }) => {
    const { onLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

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
                className="btn btn-secondary" 
                type="cancel" 
                to="/"
            >
                Cancel
            </Link>
        </Form>
    )
};

export default Login;