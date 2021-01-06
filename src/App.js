/** @format */

import React from "react";
import "./App.css";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      searchValue:"",
      rubrik: "",
      text: ""
  
    };
  }

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleTitle = (event) =>{
    this.setState({
      rubrik: event.target.value
    })
  }

  handleContent = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.rubrik,
      content: this.state.text
    }
    console.log(newItem)
  }

  render() {
    return (
      <div className="App">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            onChange={this.handleInput}
          ></input>
          <button type="submit" className="searchButton">
            <img src={SearchIcon}></img>{" "}
          </button>
        </div>

        <form id="add-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Input a title" onChange={this.handleTitle}></input> <br />
          <textarea onChange={this.handleContent}></textarea> <br />

          <button type="submit">Add</button>
        </form>

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
