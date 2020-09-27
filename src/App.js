import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    //if there was a user within the array or something else, then it would run every time the user refreshed, etc.
    auth.onAuthStateChanged(authUser => {
      console.log('The Auth user is >>>', authUser);

      if (authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }

    })
  }, [])

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
