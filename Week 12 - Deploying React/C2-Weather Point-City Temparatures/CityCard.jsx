import React from 'react';
import './CityCard.css';

function CityCard({ city, temperature, unit }) {
  return (
    <div className="city-card">
      <h2>{city}</h2>
      <p>{temperature} {unit}</p>
    </div>
  );
}

export default CityCard;