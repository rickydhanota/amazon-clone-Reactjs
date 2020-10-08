import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HZqBzAb6J8hU2CuJWQcbRRc72SL6QvVOH62xyV5HiRCjfYP98KjAsKkAgrKnHXoU9zgOEq3XC510vUFTPiVAHXe00dNCdYTIa")

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
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
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

            <Route path = "/payment">
              <Header />
              <Elements stripe = {promise}>
                <Payment />
              </Elements>
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
