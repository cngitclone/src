import React from 'react';

function CropList({ crops }) {
  return (
    <ul className="crop-list">
      {crops.map((crop, index) => (
        <li key={index} className="crop-item">
          <strong className="crop-name">{crop.name}</strong>
          <span className="crop-details">
            - Type: {crop.type} - Status: {crop.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default CropList;