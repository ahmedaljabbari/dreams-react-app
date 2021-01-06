/** @format */

import React from "react";
import "./App.css";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";
import { useState } from "react";

class App extends React.Component {
  state = {
    searchValue: "",
  };

  setSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            onChange={this.setSearchValue}
          ></input>
          <button type="submit" className="searchButton">
            <img src={SearchIcon}></img>{" "}
          </button>
        </div>

        <section>
          {DREAMS.map((dream, index) => {
            if (
              this.state.searchValue !== "" &&
              dream.title
                .toLowerCase()
                .indexOf(this.state.searchValue.toLowerCase()) === -1
            ) {
              return null;
            }
            return (
              <div key={index}>
                <h4>{dream.title}</h4>
                <p>{dream.content}</p>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
