import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import UserContext from '../context/UserContext';

const Login = (props) => {
    const { onLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(email, password);
        console.log("You're logged in!");
        return (
            <Redirect to="/"/>
        )
    };

    return (
        <form className="login-container mt-5 pt-5 ml-5 pl-5" name="login" onSubmit={handleLogin}>
            <p>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" className="email-input" onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" className="password-input" onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <Button className="btn btn-info mr-3" type="submit" disabled={!email && !password}>Login</Button>
                <Link className="btn btn-secondary" type="cancel" to="/">Cancel</Link>
            </p>
        </form>
    )
};

export default Login;