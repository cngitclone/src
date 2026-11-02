import React from 'react';
import './StopCard.css';

function StopCard({ station, time }) {
  return (
    <div className="stop-card">
      <h2>{station}</h2>
      <p>Due in {time} min</p>
    </div>
  );
}

export default StopCard;