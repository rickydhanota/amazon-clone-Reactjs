import React from 'react';
import './App.css';
import Header from './Header'

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      {/* Header, essentially the navbar */}
      <Header />
      {/* Home, everything below the navbar */}
    </div>
  );
}

export default App;
