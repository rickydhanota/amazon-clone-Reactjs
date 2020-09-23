import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className="app">

        {/* The main navbar, and because this will be the same navbar on every page we put this outside of the switch */}

          <Switch>
            <Route path = "/login">
              <Login />
            </Route>

            <Route path = "/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path = "/">
              {/* Make sure the home link '/' is the last one, and also this is where we direct to the different and various components/pages */}
              <Header />
              <Home />
            </Route>

          </Switch>

      </div>
    </Router>
  );
}

export default App;
