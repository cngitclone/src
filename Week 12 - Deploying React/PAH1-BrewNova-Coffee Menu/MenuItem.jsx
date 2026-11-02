import React from 'react';
import './MenuItem.css';

function MenuItem({ name, price }) {
  return (
    <div className="menu-item">
      <h2>{name}</h2>
      <p>Rs. {price}</p>
    </div>
  );
}

export default MenuItem;