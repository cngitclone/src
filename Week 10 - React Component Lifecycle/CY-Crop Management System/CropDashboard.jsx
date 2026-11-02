import React, { useState } from 'react';
import CropList from './CropList';

function CropDashboard({ initialCrops }) {
  const [crops] = useState(initialCrops);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1 className="title">Crop Management System</h1>

      <label htmlFor="search" className="search-label">
        Search by Crop Name:
      </label>
      <input
        id="search"
        type="text"
        className="search-input"
        placeholder="Search crops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <CropList crops={filteredCrops} />
    </div>
  );
}

export default CropDashboard;