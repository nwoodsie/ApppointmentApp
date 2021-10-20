import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import React from 'react';
import Home from './components/Home'
import Contact from './components/Contact.js';
import BookNow from './components/BookNow.js';
import OurTeam from './components/OurTeam.js';

function App() {
  return (
    <div className="App">
   
      <Router>
        <Header />
        <Switch>
          <Route path="/OurTeam">
            <OurTeam/>
          </Route>

          <Route path="/BookNow">
            <BookNow/>
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;
