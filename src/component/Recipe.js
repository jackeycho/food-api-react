import React from "react";
import { useState } from "react";
import { RecipeDetail } from "./RecipeDetail";

export const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noreferrer">
        How to cook
      </a>
      <button onClick={() => setShow(!show)}>ingredients</button>
      {show && <RecipeDetail ingredients={ingredients} />}
    </div>
  );
};
