import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PriceTag.css';

function PriceTag({ productName, originalPrice }) {
  const [isDiscounted, setIsDiscounted] = useState(false);

  const displayedPrice = isDiscounted
    ? (originalPrice * 90) / 100
    : originalPrice;

  return (
    <div id="price-tag">
      <h2 id="product-name">{productName}</h2>
      <p id="displayed-price">{`Price: ₹${displayedPrice}`}</p>
      <button
        id="toggle-discount"
        onClick={() => setIsDiscounted(!isDiscounted)}
      >
        {isDiscounted ? 'Remove Discount' : 'Apply Discount'}
      </button>
    </div>
  );
}

PriceTag.propTypes = {
  productName: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default PriceTag;