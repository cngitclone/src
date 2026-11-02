import React from 'react';
import './App.css';
import StopCard from './components/StopCard';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Transit Connect</h1>
        <h3>Metro Departure Board</h3>
      </header>
      <div className="board">
        <StopCard station="Central Square" time={4} />
        <StopCard station="Riverside" time={9} />
        <StopCard station="Airport Link" time={15} />
      </div>
    </div>
  );
}

export default App;