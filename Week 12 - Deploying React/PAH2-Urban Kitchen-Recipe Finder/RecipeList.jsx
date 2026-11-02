import React from 'react';
import './RecipeList.css';

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="empty-message">No recipes found</p>;
  }

  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe} className="recipe-item">
          {recipe}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;