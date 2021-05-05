import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Highlights from './components/Highlights';

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
