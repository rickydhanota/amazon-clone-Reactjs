import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div className="app">
      {/* Header, essentially the navbar */}
      <Header />
      {/* Home, everything below the navbar */}
      <Home />
    </div>
  );
}

export default App;
