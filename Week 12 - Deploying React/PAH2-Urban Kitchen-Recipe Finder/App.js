import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const recipes = [
  'Paneer Butter Masala',
  'Veg Biryani',
  'Masala Dosa',
  'Tomato Soup',
  'Paneer Tikka',
];

function App() {
  const [query, setQuery] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Urban Kitchen</h1>
        <h3>Recipe Finder</h3>
      </header>

      <div className="panel">
        <SearchBar query={query} onSearch={setQuery} />
        <RecipeList recipes={filteredRecipes} />
      </div>
    </div>
  );
}

export default App;