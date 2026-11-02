import React from 'react';
import './App.css';
import CropDashboard from './Components/CropDashboard';

const initialCrops = [
  { name: 'Tomato', type: 'Vegetables', status: 'Growing' },
  { name: 'Apple', type: 'Fruits', status: 'Planted' },
  { name: 'Wheat', type: 'Grains', status: 'Harvested' },
  { name: 'Carrot', type: 'Vegetables', status: 'Growing' },
  { name: 'Banana', type: 'Fruits', status: 'Growing' },
];

function App() {
  return (
    <div className="App">
      <CropDashboard initialCrops={initialCrops} />
    </div>
  );
}

export default App;