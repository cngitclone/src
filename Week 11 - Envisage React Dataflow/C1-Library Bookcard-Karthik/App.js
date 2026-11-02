import React from 'react';
import './App.css';
import BookCard from './components/BookCard';

function App() {
  return (
    <div className="App">
      <BookCard
        bookTitle="The Alchemist"
        authorName="Paulo Coelho"
        availabilityStatus="Available"
      />
    </div>
  );
}

export default App;