import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from "./firebase";

import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Highlights from './components/Highlights.js';
import Login from './components/Login/js';

const App = (props) => {

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then((response) => {

      // Do you want a login message? Write one....
    // setFlashMessage(`login`);


    // Do you want to do anything with state to display a user thing like you did with you blog?
      //   if (response.user["email"].includes("demo")) {
      //     setUser({
      //       email: response.user["email"],
      //       isAuthenticated: true,
      //       username: "Demo Account",
      //     });
      //   } else {
      //     setUser({
      //       email: response.user["email"],
      //       isAuthenticated: true,
      //       username: "Kelly Lawrence",
      //     })
      //   }
      // })
      .catch((error) => console.error(error));
      return (
        <Redirect to="/" />
      )
    };
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
  // Do you want to do anything with this? ^See above
      // .then(() => {
      //   setUser({ isAuthenticated: false});
      // })
      .catch((error) => console.error(error));
  // You need to actually write a flash message....
    // setFlashMessage(`logout`);
    return (
      <Redirect to="/" />
    )
  };

  return (
    <Router>
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
            render={() => <Login />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
