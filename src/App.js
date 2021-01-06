/** @format */

import React from "react";
import SearchIcon from "../src/Images/search.png";
import DREAMS from "./dreams-data.json";
import List from "./components/list";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: DREAMS,
      searchValue: "",
      rubrik: "",
      text: "",

      newGenre: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleTitle = (event) => {
    this.setState({
      rubrik: event.target.value,
    });
  };

  handleContent = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  changeRadio = (event) => {
    this.setState({
      newGenre: event.target.value,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.rubrik,
      content: this.state.text,
      Genre: this.state.newGenre
    };
    console.log(newItem);
    if (newItem.rubrik !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems, // خلينه اللسته الجديده بعد اضافة العنصر بمكان اللسته الاصليه
        rubrik: "",
        text: "",         //فرغنا الحقول بعد اظافة العنصر الجديد
        newGenre:""
      });
    }
  };

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
            <img src={SearchIcon} alt=""></img>{" "}
          </button>
        </div>

        <form id="add-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Input a title"
            onChange={this.handleTitle}
            value={this.state.rubrik}
          ></input>{" "}
          <br />
          <textarea
            onChange={this.handleContent}
            value={this.state.text}
          ></textarea>{" "}
          <div>
                <input
                  type="radio"
                  value="Happy"
                  checked={this.state.newGenre === "Happy"}
                  onChange={this.changeRadio}
                ></input>
                <label>Happy</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Sad"
                  checked={this.state.newGenre === "Sad"}
                  onChange={this.changeRadio}
                ></input>{" "}
                <label>Sad</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Scary"
                  checked={this.state.newGenre === "Scary"}
                  onChange={this.changeRadio}
                ></input>{" "}
                <label>Scary</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Mystery"
                  checked={this.state.newGenre === "Mystery"}
                  onChange={this.changeRadio}
                ></input>{" "}
                <label>Mystery</label>
              </div>

          <br />
          <button type="submit">Add</button>
        </form>

        <List listItems={this.state.items} searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
