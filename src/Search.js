import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Recipe } from "./component/Recipe";
import { v4 as uuidv4 } from "uuid";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "30618a34";
  const APP_KEY = "ac6fc067f9678363dba493816cdb7bf9";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
    setQuery("");
  };
  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="(e.g. Beef, Pork, rice...)"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
        <i class="fas fa-search"></i>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((food) => <Recipe key={uuidv4()} recipe={food} />)}
      </div>
    </div>
  );
};
