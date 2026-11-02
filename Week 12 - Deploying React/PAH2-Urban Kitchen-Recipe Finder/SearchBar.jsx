import React from 'react';
import './SearchBar.css';

function SearchBar({ query, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;