import React from 'react';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>BrewNova</h1>
        <h3>Coffee Menu</h3>
      </header>
      <div className="menu-board">
        <MenuItem name="Espresso" price={120} />
        <MenuItem name="Cappuccino" price={150} />
        <MenuItem name="Cold Brew" price={180} />
      </div>
    </div>
  );
}

export default App;