import React from "react";
import "./App.css";
import { Search } from "./Search";

const App = () => {
  return (
    <div className="App">
      <h1>Find Meals For Your Ingredients</h1>
      <blockquote>
        Let food be thy medicine & medicine be they food.
        <br />
        <cite>- Hippocrates</cite>
      </blockquote>
      <br />
      <Search />
    </div>
  );
};

export default App;
