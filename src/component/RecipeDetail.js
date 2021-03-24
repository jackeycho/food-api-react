import React from "react";
import { v4 as uuidv4 } from "uuid";

export const RecipeDetail = ({ ingredients }) => {
  return ingredients.map((ingred) => {
    return (
      <div className="popup">
        <ul key={uuidv4()} className="ingredient-list">
          <li className="ingredient-text">{ingred.text}</li>
          <li className="ingredient-weight">Weight -{ingred.weight}g</li>
        </ul>
      </div>
    );
  });
};
