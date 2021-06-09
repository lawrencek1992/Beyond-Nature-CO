import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useStorageState } from "react-storage-hooks";
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from "./firebase";

import UserContext from "./context/UserContext";
import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Highlights from './components/Highlights.js';
import Login from './components/Login.js';
import Message from './components/Message.js';
import InventoryForm from './components/InventoryForm.js';
import InventoryList from './components/InventoryList.js';

const App = (props) => {
  const [user, setUser] = useStorageState(localStorage, `state-user`, {});
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

  const history = useHistory();

  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 1750);
  }

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
          setUser({
            email: response.user["email"],
            isAuthenticated: true,
          });
          setFlashMessage(`login`);
          history.push("/");
      })
      .catch((error)  => {
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Invalid password");
          setShowPasswordTooltip(true);
          setTimeout(() => {
            setShowPasswordTooltip(false);
          }, 3000);
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("Email address not found");
          setShowEmailTooltip(true);
          setTimeout(() => {
            setShowEmailTooltip(false);
          }, 3000);
        } else if (error.code === "auth/too-many-requests") {
          setErrorMessage("Too many attempts. Try again later.");
          setShowPasswordTooltip(true);
          setTimeout(() => {
            setShowPasswordTooltip(false);
          }, 3000);
        }
      });
  };
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({ isAuthenticated: false});
      })
      .catch((error) => console.error(error));
    setFlashMessage(`logout`);
  };

  return (
    <Router>
    <UserContext.Provider value={{ user, onLogin, onLogout }}>
        <div className="App">
          <Header />
          {message && <Message type={message} user={user}/>}
            <Switch>
              <Route 
                exact
                path="/"
                render={() => <Home />} 
              />
              <Route 
                exact
                path="/contact"
                render={() => <Contact />}
              />
              <Route
                exact
                path="/highlights"
                render={() => <Highlights />}
              />
              <Route
                  exact
                  path="/login"
                  render={() => 
                    !UserContext.isAuthenticated 
                      ? <Login
                          errorMessage={errorMessage}
                          showEmailTooltip={showEmailTooltip}
                          showPasswordTooltip={showPasswordTooltip}
                        /> 
                      : <Redirect to="/inventory-form" />
                  }
              />
              <Route 
                exact
                path="/inventory-form"
                render={() => <InventoryForm
                      setFlashMessage={setFlashMessage}
                      message={message}
                />}
              />
              <Route 
                exact
                path="/inventory"
                render={() =>
                  <InventoryList 
                    setFlashMessage={setFlashMessage}
                    message={message}
                    user={user}
                  />
                }
              />
            </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
