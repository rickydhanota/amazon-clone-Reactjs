import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className="app">

        <Header />
        {/* The main navbar, and because this will be the same navbar on every page we put this outside of the switch */}

          <Switch>

            <Route path = "/checkout">
              <Checkout />
            </Route>

            <Route path = "/">
              {/* Make sure the home link '/' is the last one, and also this is where we direct to the different and various components/pages */}
              <Home />
            </Route>

          </Switch>

      </div>
    </Router>
  );
}

export default App;
