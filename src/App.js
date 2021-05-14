import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useStorageState } from "react-storage-hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from "./firebase";

import UserContext from "./context/UserContext";
import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Highlights from './components/Highlights.js';
import Login from './components/Login.js';

const App = (props) => {
  const [user, setUser] = useStorageState(localStorage, `state-user`, {});

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser({
          email: response.user["email"],
          isAuthenticated: true,
        })
      })
      .catch((error) => console.error(error));
    };
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({ isAuthenticated: false});
      })
      .catch((error) => console.error(error));
  // You need to actually write a flash message....
    // setFlashMessage(`logout`);
      console.log("You're logged out!");
    return (
      <Redirect to="/" />
    )
  };

  return (
    <Router>
    <UserContext.Provider value={{ user, onLogin, onLogout }}>
        <div className="App">
        <Header />
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
                  !user.isAuthenticated ? <Login /> : <Redirect to="/" />
                }
            />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
