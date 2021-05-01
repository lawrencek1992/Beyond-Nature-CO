import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
