import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import UserContext from '../context/UserContext';

const Login = ({message, setFlashMessage }) => {
    const { onLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(email, password);
        setFlashMessage(`login`);
        history.push("/");
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