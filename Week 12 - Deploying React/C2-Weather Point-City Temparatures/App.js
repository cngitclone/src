import React, { useState } from 'react';
import './App.css';
import CityCard from './components/CityCard';

const cities = [
  { city: 'Chennai', celsius: 30 },
  { city: 'Delhi', celsius: 25 },
  { city: 'Shimla', celsius: 10 },
];

function App() {
  const [unit, setUnit] = useState('C');

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Point</h1>
        <h3>City Temperatures</h3>
      </header>

      <button className="toggle-btn" onClick={toggleUnit}>
        {unit === 'C' ? 'Show in Fahrenheit' : 'Show in Celsius'}
      </button>

      <div className="card-row">
        {cities.map((item) => (
          <CityCard
            key={item.city}
            city={item.city}
            temperature={unit === 'C' ? item.celsius : (item.celsius * 9) / 5 + 32}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;