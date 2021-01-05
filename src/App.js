/** @format */

import "./App.css";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        <button type="submit" className="searchButton">
          <img src={SearchIcon}></img>{" "}
        </button>
      </div>

      <section>
        {DREAMS.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((dream, index) => {
          return (
            <div key={index}>
              <h4>{dream.title}</h4>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
